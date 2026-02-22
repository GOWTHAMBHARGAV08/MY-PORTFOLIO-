import Navbar from './components/Navbar';
import Hero from './components/Hero';

import SystemMetrics from './components/SystemMetrics';
import Projects from './components/Projects';
import Methodology from './components/Methodology';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import CursorGlow from './components/ui/CursorGlow';
import ScrollProgress from './components/ui/ScrollProgress';
import { useEffect, useRef, Component, ReactNode } from 'react';

// Inline error boundary that catches errors within individual sections
class SectionGuard extends Component<{ name: string; children: ReactNode }, { error: string | null }> {
    state = { error: null as string | null };
    static getDerivedStateFromError(err: Error) { return { error: err.message }; }
    componentDidCatch(err: Error) { console.error(`[${this.props.name}] crashed:`, err); }
    render() {
        if (this.state.error) return <div style={{ color: '#EF4444', padding: 20, fontFamily: 'monospace', fontSize: 12, border: '1px solid #EF4444', margin: 8, borderRadius: 8 }}>❌ {this.props.name}: {this.state.error}</div>;
        return this.props.children;
    }
}

function App() {
    const mainRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
        const elements = document.querySelectorAll('.fade-up');
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative min-h-screen bg-background text-text-body" style={{ background: '#0B0F1A', minHeight: '100vh' }}>
            <SectionGuard name="ScrollProgress"><ScrollProgress /></SectionGuard>
            <SectionGuard name="CursorGlow"><CursorGlow /></SectionGuard>
            <SectionGuard name="Navbar"><Navbar /></SectionGuard>

            {/* Fixed Atmosphere Layer */}
            <div className="fixed inset-0 z-[1] pointer-events-none">
                <div className="absolute inset-0 bg-grid-pattern opacity-100" />
                <div className="absolute left-1/2 -translate-x-1/2 -top-20 w-[900px] h-[600px] rounded-full opacity-100"
                    style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, rgba(59,130,246,0.02) 40%, transparent 70%)' }}
                />
                <div className="absolute right-[5%] top-[10%] w-[500px] h-[400px] rounded-full opacity-100"
                    style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.04) 0%, transparent 60%)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
            </div>

            <main ref={mainRef} className="relative z-10 flex flex-col items-center w-full">
                <SectionGuard name="Hero"><Hero /></SectionGuard>

                <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                    <SectionGuard name="Experience"><Experience /></SectionGuard>
                    <SectionGuard name="SystemMetrics"><SystemMetrics /></SectionGuard>
                    <SectionGuard name="Projects"><Projects /></SectionGuard>
                    <SectionGuard name="Certifications"><Certifications /></SectionGuard>
                    <SectionGuard name="Methodology"><Methodology /></SectionGuard>
                    <SectionGuard name="TechStack"><TechStack /></SectionGuard>
                    <SectionGuard name="Contact"><Contact /></SectionGuard>
                </div>
                <SectionGuard name="Footer"><Footer /></SectionGuard>
            </main>
        </div>
    );
}

export default App;
