import { motion } from 'framer-motion';

const experiences = [
    {
        role: 'ML Engineer Intern',
        company: 'Supernest.AI',
        period: '2024',
        description: 'Built KisanMitra — a CNN-based crop disease detection system achieving 92% accuracy across 38 plant disease classes. Developed full-stack data preprocessing pipelines handling 10K+ images, integrated model inference APIs with real-time monitoring dashboards, and shipped the Android app via Capacitor.',
        tech: ['Python', 'TensorFlow', 'CNN', 'React', 'TypeScript', 'Capacitor', 'Supabase'],
    },
];

const Experience = () => {
    return (
        <section className="py-20 md:py-32 fade-up" id="experience">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1px] bg-primary/40" />
                <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase">Background</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-text-heading">
                Experience
            </h2>

            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-white/[0.06]" />

                <div className="space-y-12">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="relative pl-10 group"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-white/[0.1] bg-surface group-hover:border-primary group-hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] transition-all duration-300" />

                            <div className="glass-panel rounded-xl p-6 transition-all duration-300 hover:glow-border-hover">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                                    <div>
                                        <h3 className="text-lg font-display font-semibold text-text-heading">{exp.role}</h3>
                                        <p className="text-sm text-primary/80 font-mono">{exp.company}</p>
                                    </div>
                                    <span className="text-xs font-mono text-text-dim mt-2 md:mt-0">{exp.period}</span>
                                </div>

                                <p className="text-sm text-text-body leading-relaxed mb-4">{exp.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map(t => (
                                        <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono text-text-muted glass-panel-light">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
