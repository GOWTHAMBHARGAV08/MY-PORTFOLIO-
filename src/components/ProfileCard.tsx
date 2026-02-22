import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ProfileCard = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        setRotateY(((x - centerX) / centerX) * 8);
        setRotateX((-(y - centerY) / centerY) * 8);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setIsHovering(false);
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 -mt-8 mb-20 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex justify-center lg:justify-start"
            >
                <div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={handleMouseLeave}
                    className="relative"
                    style={{
                        perspective: '1000px',
                    }}
                >
                    <div
                        className="relative w-[340px] rounded-2xl glass-panel p-6 transition-all duration-300"
                        style={{
                            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                            boxShadow: isHovering
                                ? '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(59,130,246,0.1), inset 0 1px 0 rgba(255,255,255,0.05)'
                                : '0 10px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)',
                        }}
                    >
                        {/* Reflection sweep */}
                        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                            <div
                                className={`absolute inset-0 opacity-0 ${isHovering ? 'animate-sweep opacity-[0.06]' : ''}`}
                                style={{
                                    background: 'linear-gradient(135deg, transparent 20%, rgba(255,255,255,0.4) 50%, transparent 80%)',
                                    width: '50%',
                                }}
                            />
                        </div>

                        <div className="flex items-center gap-5">
                            {/* Photo */}
                            <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/[0.08] flex-shrink-0">
                                <img
                                    src="/profile.jpg"
                                    alt="Gowtham Bhargav Reddy"
                                    className="w-full h-full object-cover object-top"
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        target.style.display = 'none';
                                        const fallback = target.nextElementSibling as HTMLElement;
                                        if (fallback) fallback.style.display = 'flex';
                                    }}
                                />
                                <div className="w-full h-full items-center justify-center bg-surface-elevated text-lg font-display font-bold text-primary" style={{ display: 'none' }}>
                                    GB
                                </div>
                            </div>

                            {/* Info */}
                            <div>
                                <h3 className="text-base font-display font-semibold text-text-heading tracking-tight">
                                    B. Gowtham Bhargav Reddy
                                </h3>
                                <p className="text-xs font-mono text-primary mt-1 tracking-wide">
                                    AI Engineer
                                </p>
                                <div className="flex items-center gap-1.5 mt-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-[10px] font-mono text-text-dim tracking-wider">
                                        Available for opportunities
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProfileCard;
