import { useRef, useState, useEffect, useCallback } from 'react';
import introVideo from '../assets/intro.mp4';

interface VideoIntroProps {
    onComplete: () => void;
}

const VideoIntro = ({ onComplete }: VideoIntroProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isZooming, setIsZooming] = useState(false);
    const [progress, setProgress] = useState(0);

    // Skip if already played this session
    useEffect(() => {
        if (sessionStorage.getItem('introPlayed')) {
            onComplete();
        }
    }, [onComplete]);

    const completeIntro = useCallback(() => {
        sessionStorage.setItem('introPlayed', 'true');
        onComplete();
    }, [onComplete]);

    // Autoplay muted first (browsers require this), then try to unmute
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                // Playing! Try to unmute (may fail on some browsers)
                try {
                    video.muted = false;
                } catch {
                    // Stay muted if unmute fails
                }
            }).catch(() => {
                // Even muted autoplay blocked — skip intro
                completeIntro();
            });
        }
    }, [completeIntro]);

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (!video || !video.duration) return;

        const remaining = video.duration - video.currentTime;
        setProgress(video.currentTime / video.duration);

        if (remaining <= 1 && !isZooming) {
            setIsZooming(true);
        }
    };

    const handleEnded = () => {
        completeIntro();
    };

    const handleSkip = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
        completeIntro();
    };

    // If already played, render nothing
    if (sessionStorage.getItem('introPlayed')) {
        return null;
    }

    // SVG progress ring
    const circumference = 2 * Math.PI * 18;
    const strokeDashoffset = circumference - (progress * circumference);

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                background: 'black',
            }}
        >
            <video
                ref={videoRef}
                muted
                playsInline
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    transition: isZooming
                        ? 'transform 1s ease-in, opacity 0.6s ease-in'
                        : 'none',
                    transform: isZooming ? 'scale(2.5)' : 'scale(1)',
                    opacity: isZooming ? 0 : 1,
                }}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
            >
                <source src={introVideo} type="video/mp4" />
            </video>

            {/* Skip Intro Button with progress ring */}
            <button
                onClick={handleSkip}
                onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.85';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                }}
                style={{
                    position: 'fixed',
                    bottom: 40,
                    right: 40,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: 50,
                    padding: '10px 22px 10px 16px',
                    cursor: 'pointer',
                    zIndex: 10000,
                    opacity: 0.85,
                    transition: 'opacity 0.3s ease, background 0.3s ease',
                    backdropFilter: 'blur(10px)',
                }}
            >
                {/* Progress ring */}
                <svg width="32" height="32" viewBox="0 0 44 44" style={{ transform: 'rotate(-90deg)' }}>
                    <circle
                        cx="22" cy="22" r="18"
                        fill="none"
                        stroke="rgba(255,255,255,0.15)"
                        strokeWidth="2.5"
                    />
                    <circle
                        cx="22" cy="22" r="18"
                        fill="none"
                        stroke="rgba(59,130,246,0.9)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        style={{ transition: 'stroke-dashoffset 0.3s ease' }}
                    />
                </svg>
                <span
                    style={{
                        fontFamily: '"JetBrains Mono", "DM Mono", monospace',
                        fontSize: 13,
                        fontWeight: 500,
                        color: 'white',
                        letterSpacing: '0.1em',
                    }}
                >
                    SKIP INTRO
                </span>
            </button>
        </div>
    );
};

export default VideoIntro;
