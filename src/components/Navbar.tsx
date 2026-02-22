import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Experience', href: '#experience' },
    { label: 'Tech Stack', href: '#techstack' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? 'bg-background/80 backdrop-blur-2xl border-b border-white/[0.04]'
            : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#" className="font-display font-bold text-lg text-text-heading tracking-tight">
                        Gowtham<span className="text-primary">.AI</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm text-text-muted hover:text-text-heading transition-colors duration-300 font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="h-9 px-5 rounded-lg bg-primary/10 text-primary text-sm font-medium flex items-center transition-all duration-300 hover:bg-primary/20"
                        >
                            Let's Talk
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-text-muted"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-white/[0.04]"
                    >
                        <div className="px-6 py-4 flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-sm text-text-body hover:text-text-heading py-2 transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
