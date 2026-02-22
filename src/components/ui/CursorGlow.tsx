import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CursorGlow = () => {
    const [visible, setVisible] = useState(false);

    const springConfig = { stiffness: 120, damping: 20, mass: 0.6 };
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);

    useEffect(() => {
        // Don't render on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const handleMouseMove = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);
            if (!visible) setVisible(true);
        };

        const handleMouseLeave = () => setVisible(false);
        const handleMouseEnter = () => setVisible(true);

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [x, y, visible]);

    // Don't render on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <motion.div
            className="fixed pointer-events-none z-[9999]"
            style={{
                x,
                y,
                translateX: '-50%',
                translateY: '-50%',
                opacity: visible ? 1 : 0,
            }}
        >
            {/* Soft blue halo */}
            <div
                className="w-[350px] h-[350px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, rgba(59,130,246,0.015) 40%, transparent 65%)',
                }}
            />
        </motion.div>
    );
};

export default CursorGlow;
