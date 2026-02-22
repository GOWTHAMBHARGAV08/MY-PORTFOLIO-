import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
    {
        name: 'AI & ML',
        items: ['TensorFlow', 'PyTorch', 'OpenAI GPT', 'Google Gemini', 'LangChain', 'RAG', 'CNN', 'Hugging Face'],
    },
    {
        name: 'Backend',
        items: ['Supabase', 'PostgreSQL', 'REST APIs', 'Node.js', 'FastAPI', 'Webhooks'],
    },
    {
        name: 'Automation',
        items: ['n8n', 'Zapier', 'Cron Jobs', 'Email Automation', 'Web Scraping'],
    },
    {
        name: 'Frontend',
        items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Three.js', 'Framer Motion'],
    },
    {
        name: 'DevOps',
        items: ['Git', 'GitHub Actions', 'Docker', 'Capacitor', 'Vercel'],
    },
    {
        name: 'Languages',
        items: ['Python', 'TypeScript', 'JavaScript', 'SQL'],
    },
];

const TechStack = () => {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    const filteredCategories = activeFilter
        ? categories.filter(c => c.name === activeFilter)
        : categories;

    return (
        <section className="py-20 md:py-32 fade-up" id="techstack">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1px] bg-primary/40" />
                <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase">Stack</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-text-heading">
                Technologies
            </h2>

            {/* Filter Toggles */}
            <div className="flex flex-wrap gap-2 mb-10">
                <button
                    onClick={() => setActiveFilter(null)}
                    className={`px-4 py-2 rounded-lg text-xs font-mono transition-all duration-300 ${activeFilter === null
                            ? 'bg-primary/15 text-primary border border-primary/20'
                            : 'glass-panel-light text-text-muted hover:text-text-heading'
                        }`}
                >
                    All
                </button>
                {categories.map(cat => (
                    <button
                        key={cat.name}
                        onClick={() => setActiveFilter(activeFilter === cat.name ? null : cat.name)}
                        className={`px-4 py-2 rounded-lg text-xs font-mono transition-all duration-300 ${activeFilter === cat.name
                                ? 'bg-primary/15 text-primary border border-primary/20'
                                : 'glass-panel-light text-text-muted hover:text-text-heading'
                            }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="wait">
                    {filteredCategories.map((category) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="glass-panel rounded-xl p-5"
                        >
                            <h3 className="text-xs font-mono text-primary/70 tracking-[0.2em] uppercase mb-4">
                                {category.name}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map(item => (
                                    <span
                                        key={item}
                                        className="px-3 py-1.5 rounded-lg text-xs font-medium text-text-muted glass-panel-light transition-all duration-300 hover:text-text-heading hover:glow-border hover:-translate-y-0.5 cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default TechStack;
