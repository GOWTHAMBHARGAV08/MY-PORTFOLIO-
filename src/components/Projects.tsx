import { useState } from 'react';
import ArchitectureDiagram from './ui/ArchitectureDiagram';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    tech: string[];
    diagramType: 'cnn' | 'automation';
    highlights: string[];
    technicalDecisions: {
        question: string;
        answer: string;
    }[];
    githubUrl?: string;
    liveUrl?: string;
}

const projects: Project[] = [
    {
        id: '1',
        title: 'KisanMitra',
        subtitle: 'AI Smart Farming Assistant',
        description: 'An AI-powered digital agriculture platform designed to help farmers make informed decisions using real-time data, computer vision, and conversational AI. Combines crop disease detection, intelligent chatbot assistance, market insights, and personalized dashboards into a single unified farming solution optimized for Android.',
        tech: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Shadcn UI', 'Supabase', 'PostgreSQL', 'Capacitor', 'Android APK'],
        diagramType: 'cnn',
        highlights: [
            'Built "Crop Doctor" AI disease detection: farmers upload images, model identifies diseases, and provides treatment suggestions.',
            'Developed a conversational Farming Chatbot with RAG integration for context-aware agricultural queries.',
            'Implemented real-time Market Insights with historical price trend visualization to help farmers decide selling times.',
            'Created "My Farm Today" dashboard offering weather updates, farming tips, and smart alerts for pest/climate risks.',
            'Deployed as a cross-platform Android APK (ID: com.kisanmitra.agrohub) using Capacitor.'
        ],
        technicalDecisions: [
            {
                question: 'Why Capacitor for Mobile?',
                answer: 'Allowed rapid deployment of the React web codebase as a native Android APK without maintaining a separate mobile codebase, ensuring feature parity and faster iteration cycles.'
            },
            {
                question: 'Role of Supabase?',
                answer: 'Acted as a unified backend-as-a-service, handling Auth, PostgreSQL storage for crop history, and vector storage for the chatbot\'s RAG capabilities, reducing backend boilerplate.'
            }
        ],
        githubUrl: 'https://github.com/GOWTHAMBHARGAV08/KISAN-MITRA-APP.git'
    },
    {
        id: '2',
        title: 'AI Automation Workflows',
        subtitle: 'Intelligent n8n Orchestration',
        description: 'A collection of intelligent automation systems built using n8n and integrated with LLMs like OpenAI GPT and Google Gemini. Streamlines business communication, recruitment, lead generation, and content creation to reduce manual effort and build scalable operations.',
        tech: ['n8n', 'OpenAI GPT', 'Google Gemini', 'Supabase', 'Webhooks', 'Google Sheets'],
        diagramType: 'automation',
        highlights: [
            'AI Auto-Responder: Classifies emails by intent, uses RAG with Supabase to generate professional HTML replies.',
            'Job Hunter Automation: Parses PDF resumes, extracts skills, scores candidate compatibility (0–10).',
            'LinkedIn Lead Scraper: Generates optimized queries, extracts profiles, filters non-matches.',
            'Social Media Auto-Posting: Orchestrates multi-platform publishing with AI-generated captions.',
            'AI Reel Generator: Uses Gemini Vision to analyze product images and generate cinematic video reels.'
        ],
        technicalDecisions: [
            {
                question: 'Why n8n + LLMs?',
                answer: 'n8n provides visual orchestration for connecting services (Gmail, Drive, LinkedIn), while LLMs handle cognitive tasks (parsing, summarizing, generating), creating a flexible "cognitive middleware" layer.'
            },
            {
                question: 'RAG in Auto-Responder?',
                answer: 'Instead of generic replies, the system retrieves relevant context from a Supabase vector store before generating the email, ensuring accurate, context-specific responses.'
            }
        ],
        githubUrl: 'https://github.com/GOWTHAMBHARGAV08/AI-AUTOMATION-WORKFLOWS-N8N.git'
    }
];

const Projects = () => {
    const [expandedDecisions, setExpandedDecisions] = useState<Record<string, boolean>>({});

    const toggleDecisions = (projectId: string) => {
        setExpandedDecisions((prev) => ({ ...prev, [projectId]: !prev[projectId] }));
    };

    return (
        <section className="py-20 md:py-32 fade-up" id="projects">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1px] bg-primary/40" />
                <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase">Case Studies</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-text-heading">
                Production Systems
            </h2>

            <div className="flex flex-col gap-24">
                {projects.map((project, index) => (
                    <div key={project.id} className={`flex flex-col lg:flex-row gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                        {/* Diagram */}
                        <div className="flex-1 w-full">
                            <div className="rounded-xl glass-panel p-4 transition-all duration-500 hover:glow-border-hover group">
                                <ArchitectureDiagram type={project.diagramType} />
                            </div>
                        </div>

                        {/* Info */}
                        <div className="flex-1 w-full">
                            <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 text-text-heading">{project.title}</h3>
                            <p className="text-primary/80 font-mono text-xs tracking-[0.2em] uppercase mb-6">{project.subtitle}</p>
                            <p className="text-text-body mb-8 leading-relaxed text-sm">{project.description}</p>

                            {/* Tech Tags */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map(t => (
                                    <span key={t} className="px-3 py-1 rounded-full text-xs font-mono text-text-muted glass-panel-light transition-all duration-300 hover:text-text-heading hover:glow-border">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Highlights */}
                            <ul className="space-y-3 mb-8">
                                {project.highlights.map((h, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-text-body">
                                        <div className="w-1 h-1 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                                        {h}
                                    </li>
                                ))}
                            </ul>

                            {/* Technical Decisions Accordion */}
                            <button
                                onClick={() => toggleDecisions(project.id)}
                                className="flex items-center gap-2 text-xs font-mono text-text-muted hover:text-text-heading transition-colors mb-4"
                            >
                                {expandedDecisions[project.id] ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                                Technical Decisions
                            </button>
                            <AnimatePresence>
                                {expandedDecisions[project.id] && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="space-y-4 mb-8 overflow-hidden"
                                    >
                                        {project.technicalDecisions.map((d, i) => (
                                            <div key={i} className="glass-panel-light rounded-lg p-4">
                                                <p className="text-xs font-mono text-primary mb-2">{d.question}</p>
                                                <p className="text-xs text-text-body leading-relaxed">{d.answer}</p>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Links */}
                            <div className="flex gap-3">
                                {project.githubUrl && (
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                        className="h-9 px-4 rounded-lg glass-panel-light text-text-muted hover:text-text-heading text-xs font-medium flex items-center gap-2 transition-all duration-300 hover:glow-border">
                                        <Github className="w-3.5 h-3.5" /> Source
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                        className="h-9 px-4 rounded-lg bg-primary/10 text-primary text-xs font-medium flex items-center gap-2 transition-all duration-300 hover:bg-primary/20">
                                        <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
