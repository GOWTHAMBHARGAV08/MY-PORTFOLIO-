import { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';

const Hero = () => {
    const dragY = useMotionValue(0);
    const dragX = useMotionValue(0);
    const [isDragging, setIsDragging] = useState(false);

    // Lanyard stretch
    const lanyardHeight = useTransform(dragY, [-100, 0, 200], [30, 70, 250]);
    const smoothLanyardHeight = useSpring(lanyardHeight, { stiffness: 300, damping: 30 });
    const lanyardRotate = useTransform(dragX, [-150, 0, 150], [12, 0, -12]);
    const smoothLanyardRotate = useSpring(lanyardRotate, { stiffness: 200, damping: 25 });

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden" id="hero">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
                    {/* Left: Headline */}
                    <div className="flex-1 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <div className="w-8 h-[1px] bg-primary/50" />
                            <span className="text-primary font-mono tracking-[0.3em] text-xs uppercase">AI Engineer</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.05] mb-8"
                        >
                            <span className="text-text-heading">Gowtham Bhargav</span>
                            <br />
                            <span className="bg-gradient-to-r from-text-heading via-text-muted to-text-dim bg-clip-text text-transparent">
                                Reddy Bhavanam
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="text-lg lg:text-xl text-text-body mb-12 max-w-xl leading-relaxed"
                        >
                            ML pipelines, RAG systems, intelligent agent workflows, and model serving infrastructure — engineered for reliability and scale.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="flex flex-wrap gap-4"
                        >
                            <button
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                className="h-12 px-8 rounded-lg bg-primary hover:bg-primary-dark text-white font-medium text-sm flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                            >
                                View My Work
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => window.open('/resume.pdf', '_blank')}
                                className="h-12 px-8 rounded-lg glass-panel-light text-text-heading font-medium text-sm flex items-center gap-2 transition-all duration-300 hover:border-primary/30"
                            >
                                <Code2 className="w-4 h-4" />
                                Download CV
                            </button>
                        </motion.div>
                    </div>

                    {/* Right: Draggable ID Card — exact reference recreation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex-shrink-0 relative"
                    >
                        {/* Fixed Anchor Point */}
                        <div className="absolute left-1/2 -translate-x-1/2 -top-1 z-30">
                            <div className="w-2.5 h-2.5 rounded-full bg-gray-400 border border-gray-300 shadow-sm" />
                        </div>

                        {/* Navy Lanyard Strap */}
                        <motion.div
                            className="absolute left-1/2 -translate-x-1/2 top-0 z-20 origin-top overflow-hidden rounded-[1px]"
                            style={{
                                height: smoothLanyardHeight,
                                width: 18,
                                rotate: smoothLanyardRotate,
                            }}
                        >
                            {/* Fabric texture */}
                            <div className="w-full h-full relative" style={{
                                background: 'linear-gradient(180deg, #1e2a4a 0%, #1a2744 50%, #1e2a4a 100%)',
                            }}>
                                {/* White stitching lines */}
                                <div className="absolute left-[3px] top-0 bottom-0 w-[1px] opacity-20" style={{ background: 'repeating-linear-gradient(to bottom, white 0px, white 3px, transparent 3px, transparent 6px)' }} />
                                <div className="absolute right-[3px] top-0 bottom-0 w-[1px] opacity-20" style={{ background: 'repeating-linear-gradient(to bottom, white 0px, white 3px, transparent 3px, transparent 6px)' }} />
                                {/* Center white stripe marks */}
                                <div className="absolute left-1/2 -translate-x-1/2 top-2 flex flex-col gap-[3px]">
                                    {[0, 1, 2].map(i => (
                                        <div key={i} className="w-[6px] h-[2px] bg-white/30 rounded-full" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Draggable Card Assembly */}
                        <motion.div
                            drag
                            dragSnapToOrigin
                            dragElastic={0.15}
                            dragConstraints={{ top: -60, bottom: 220, left: -160, right: 160 }}
                            onDragStart={() => setIsDragging(true)}
                            onDragEnd={() => setIsDragging(false)}
                            style={{ x: dragX, y: dragY, cursor: isDragging ? 'grabbing' : 'grab' }}
                            animate={!isDragging ? { rotate: [0, 0.8, 0, -0.8, 0] } : {}}
                            transition={!isDragging ? { duration: 7, repeat: Infinity, ease: "easeInOut" } : { type: "spring", stiffness: 300, damping: 25 }}
                            className="relative mt-14 select-none"
                        >
                            {/* Metal D-Ring + Swivel Clip (SVG) */}
                            <div className="absolute left-1/2 -translate-x-1/2 -top-10 z-10 w-8 h-12">
                                <svg viewBox="0 0 32 48" className="w-full h-full" fill="none">
                                    {/* D-Ring */}
                                    <path d="M8 4 H24 A8 8 0 0 1 24 20 H8 Z" fill="none" stroke="url(#metalGrad)" strokeWidth="2.5" strokeLinecap="round" />
                                    {/* Connector piece */}
                                    <rect x="12" y="18" width="8" height="6" rx="1" fill="url(#metalGrad2)" />
                                    {/* Hook body */}
                                    <path d="M13 24 L13 34 Q13 38 16 38 Q19 38 19 34 L19 24" fill="none" stroke="url(#metalGrad)" strokeWidth="2" strokeLinecap="round" />
                                    {/* Hook tip */}
                                    <path d="M13 34 Q13 42 16 44 Q19 42 19 34" fill="none" stroke="url(#metalGrad)" strokeWidth="1.5" strokeLinecap="round" />
                                    {/* Spring gate */}
                                    <line x1="19" y1="28" x2="19" y2="36" stroke="#9CA3AF" strokeWidth="1" />
                                    <defs>
                                        <linearGradient id="metalGrad" x1="0" y1="0" x2="32" y2="48">
                                            <stop offset="0%" stopColor="#B0B8C8" />
                                            <stop offset="40%" stopColor="#D1D5DB" />
                                            <stop offset="60%" stopColor="#9CA3AF" />
                                            <stop offset="100%" stopColor="#B0B8C8" />
                                        </linearGradient>
                                        <linearGradient id="metalGrad2" x1="12" y1="18" x2="20" y2="24">
                                            <stop offset="0%" stopColor="#9CA3AF" />
                                            <stop offset="100%" stopColor="#6B7280" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            {/* === ID CARD === */}
                            <div className="relative w-[260px] rounded-2xl overflow-hidden"
                                style={{
                                    background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
                                    boxShadow: '0 25px 80px rgba(0,0,0,0.35), 0 8px 30px rgba(0,0,0,0.15)',
                                }}
                            >
                                {/* Card hole at top */}
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-3 rounded-full bg-gray-200/80 border border-gray-300/50" />

                                {/* Spacer for card hole */}
                                <div className="pt-6" />

                                {/* --- Photo Section with Brand Watermarks --- */}
                                <div className="relative mx-4 h-[200px] overflow-hidden rounded-lg">
                                    {/* Brand watermark letters behind photo */}
                                    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                                        {/* Teal "B" shapes */}
                                        <div className="absolute right-[-10px] top-[-10px] text-[120px] font-black leading-none select-none" style={{ color: 'rgba(20, 184, 166, 0.15)' }}>B</div>
                                        <div className="absolute left-[-15px] bottom-[-20px] text-[100px] font-black leading-none select-none" style={{ color: 'rgba(20, 184, 166, 0.12)' }}>M</div>
                                        {/* Navy watermarks */}
                                        <div className="absolute right-[10px] bottom-[-15px] text-[90px] font-black leading-none select-none" style={{ color: 'rgba(30, 42, 74, 0.08)' }}>B</div>
                                        <div className="absolute left-[20px] top-[10px] text-[70px] font-black leading-none select-none" style={{ color: 'rgba(30, 42, 74, 0.06)' }}>II</div>
                                    </div>

                                    {/* Profile Photo */}
                                    <img
                                        src="/profile.jpg"
                                        alt="Gowtham Bhargav"
                                        className="relative z-10 w-full h-full object-cover object-top"
                                        onError={(e) => {
                                            const target = e.currentTarget;
                                            target.style.display = 'none';
                                            const fallback = target.nextElementSibling as HTMLElement;
                                            if (fallback) fallback.style.display = 'flex';
                                        }}
                                    />
                                    <div className="w-full h-full items-center justify-center text-5xl font-display font-bold"
                                        style={{ display: 'none', background: '#E2E8F0', color: '#14B8A6' }}
                                    >
                                        GB
                                    </div>
                                </div>

                                {/* --- Bottom Section: Contact Info --- */}
                                <div className="relative px-5 py-4 space-y-2.5">
                                    {/* Brand watermark in bottom area */}
                                    <div className="absolute right-[-8px] bottom-[-10px] text-[80px] font-black leading-none select-none pointer-events-none" style={{ color: 'rgba(30, 42, 74, 0.04)' }}>B</div>

                                    {/* Hire Me button */}
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&to=gowthambhargav619@gmail.com&su=Hiring%20Inquiry%20-%20AI%20Engineer&body=Hi%20Gowtham%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%E2%80%99m%20impressed%20with%20your%20work.%20I%E2%80%99d%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0A%0ALooking%20forward%20to%20hearing%20from%20you!"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="w-full py-2 rounded-lg text-white text-[12px] font-bold tracking-wide text-center block transition-all duration-200 hover:brightness-110 hover:shadow-lg active:scale-95 cursor-pointer"
                                        style={{ background: '#EF4444', pointerEvents: 'auto' }}
                                    >
                                        Hire Me
                                    </a>

                                    {/* Divider */}
                                    <div className="w-full h-[1px] bg-gray-100" />

                                    {/* Name */}
                                    <div className="pt-1">
                                        <p className="text-[13px] font-bold text-gray-900 leading-tight">B. Gowtham Bhargav Reddy</p>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-5 h-5 flex items-center justify-center" style={{ color: '#14B8A6' }}>
                                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </div>
                                        <p className="text-[11px] text-gray-700 font-medium">gowthambhargav619@gmail.com</p>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-5 h-5 flex items-center justify-center" style={{ color: '#14B8A6' }}>
                                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                        </div>
                                        <p className="text-[11px] text-gray-700 font-medium">+91 7780 125919</p>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-5 h-5 flex items-center justify-center" style={{ color: '#14B8A6' }}>
                                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="text-[11px] text-gray-700 font-medium">Bangalore</p>
                                    </div>
                                </div>
                            </div>

                            {/* Drag hint */}
                            {!isDragging && (
                                <motion.div
                                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-text-dim"
                                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    drag me
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
