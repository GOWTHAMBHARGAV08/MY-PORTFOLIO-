import { useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        id: 'define',
        label: 'Define',
        icon: '🎯',
        detail: 'Clarify the problem. Identify data sources, success metrics, and constraints. Map stakeholder requirements to technical specifications.',
    },
    {
        id: 'architect',
        label: 'Architect',
        icon: '📐',
        detail: 'Design the system topology — data flow, model serving strategy, API contracts, and failure modes. Choose the right abstractions.',
    },
    {
        id: 'develop',
        label: 'Develop',
        icon: '⚡',
        detail: 'Build with production in mind from day one. Clean pipelines, typed interfaces, comprehensive logging, and test coverage.',
    },
    {
        id: 'validate',
        label: 'Validate',
        icon: '✅',
        detail: 'Run model performance benchmarks, integration tests, and load tests. Validate with real-world edge cases, not just happy paths.',
    },
    {
        id: 'deploy',
        label: 'Deploy',
        icon: '🚀',
        detail: 'Ship with monitoring, rollback strategies, and observability. Automate deployment pipelines. Measure production drift.',
    },
];

const Methodology = () => {
    const [activeStep, setActiveStep] = useState<string | null>(null);

    return (
        <section className="py-20 md:py-32 fade-up" id="methodology">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1px] bg-primary/40" />
                <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase">Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-text-heading">
                How I Build AI Systems
            </h2>

            {/* Horizontal Timeline */}
            <div className="relative">
                {/* Connecting line */}
                <div className="absolute top-8 left-0 right-0 h-[1px] bg-white/[0.06] hidden md:block" />

                {/* Animated progress line */}
                <motion.div
                    className="absolute top-8 left-0 h-[1px] bg-gradient-to-r from-primary to-accent-violet hidden md:block"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }}
                />

                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
                    {steps.map((step, i) => (
                        <div
                            key={step.id}
                            className="relative group cursor-pointer"
                            onMouseEnter={() => setActiveStep(step.id)}
                            onMouseLeave={() => setActiveStep(null)}
                        >
                            {/* Node dot */}
                            <div className="relative z-10 mb-6">
                                <div className={`w-4 h-4 rounded-full border-2 mx-auto transition-all duration-300 ${activeStep === step.id
                                        ? 'border-primary bg-primary/20 shadow-[0_0_12px_rgba(59,130,246,0.3)]'
                                        : 'border-white/[0.12] bg-surface'
                                    }`} />
                            </div>

                            {/* Step number */}
                            <div className="text-[10px] font-mono text-text-dim mb-2 text-center">
                                0{i + 1}
                            </div>

                            {/* Icon + Label */}
                            <div className="text-center mb-3">
                                <div className="text-lg mb-2">{step.icon}</div>
                                <div className="text-sm font-display font-semibold text-text-heading">
                                    {step.label}
                                </div>
                            </div>

                            {/* Expandable Detail */}
                            <div className={`text-xs text-text-muted leading-relaxed text-center transition-all duration-300 overflow-hidden ${activeStep === step.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 md:max-h-40 md:opacity-60'
                                }`}>
                                {step.detail}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Methodology;
