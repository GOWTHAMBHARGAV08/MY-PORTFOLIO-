import { useEffect, useRef, useState } from 'react';

const metrics = [
    { value: 5, suffix: '+', label: 'Production Systems', description: 'End-to-end deployed' },
    { value: 10, suffix: '+', label: 'AI Workflows', description: 'n8n + LLM automations' },
    { value: 3, suffix: '', label: 'Shipped Products', description: 'Mobile & web apps' },
    { value: 15, suffix: '+', label: 'Technologies', description: 'In active stack' },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const duration = 1500;
                    const startTime = Date.now();

                    const animate = () => {
                        const elapsed = Date.now() - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * target));

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(target);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <span ref={ref} className="tabular-nums">
            {count}{suffix}
        </span>
    );
};

const SystemMetrics = () => {
    return (
        <section className="py-20 fade-up" id="metrics">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, i) => (
                    <div
                        key={metric.label}
                        className="relative group glass-panel rounded-xl p-6 transition-all duration-300 hover:glow-border-hover"
                    >
                        {/* Glowing accent under number */}
                        <div className="absolute top-6 left-6 w-12 h-[2px] rounded-full bg-primary/30 group-hover:bg-primary/60 group-hover:w-16 transition-all duration-500" />

                        <div className="text-3xl md:text-4xl font-display font-bold text-text-heading mt-4 mb-3">
                            <CountUp target={metric.value} suffix={metric.suffix} />
                        </div>

                        <div className="text-sm font-medium text-text-body mb-1">{metric.label}</div>
                        <div className="text-xs font-mono text-text-dim">{metric.description}</div>

                        {/* Thin divider at bottom */}
                        {i < metrics.length - 1 && (
                            <div className="absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-white/[0.04] hidden lg:block" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SystemMetrics;
