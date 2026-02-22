import { ExternalLink } from 'lucide-react';
import edunetCert from '../assets/certificates/edunet-cert.png';
import ibmCert from '../assets/certificates/ibm-cert.png';
import iotCert from '../assets/certificates/IOT.png';
import awsCert from '../assets/certificates/aws.png';
import networkCert from '../assets/certificates/computer network.png';
import linkedinCert from '../assets/certificates/linkedin.png';
import outskillCert from '../assets/certificates/outskill.png';

const certifications = [
    {
        title: 'Advanced course on Green Skills and Artificial Intelligence',
        issuer: 'EduNet Foundation',
        image: edunetCert,
        description: 'Successfully completed the advanced specialization under the Skills4Future Program. Focused on the intersection of sustainability and AI systems.',
        details: 'Collaboration with AICTE & Shell India',
        duration: 'July 2025 - Dec 2025',
        tags: ['Green Skills', 'AI', 'Sustainability'],
        link: 'https://drive.google.com/file/d/1yQWdBd13c8tpB0Int9lOfSmeLGmEjBLM/view',
        color: '#3B82F6',
    },
    {
        title: 'Getting Started with Artificial Intelligence',
        issuer: 'IBM SkillsBuild',
        image: ibmCert,
        description: 'Achieved professional excellence in AI fundamentals. Verified credential acknowledging commitment to technical mastery in AI.',
        details: 'IBM Professional Credential',
        duration: 'Issued Oct 08, 2025',
        tags: ['AI Fundamentals', 'IBM Watson'],
        link: 'https://www.credly.com/badges/f203fd0d-74ed-4ddc-a5e7-d0e3d11ae32b',
        color: '#6366F1',
    },
    {
        title: 'AWS Machine Learning Foundations',
        issuer: 'AWS',
        image: awsCert,
        description: 'Validated skills in building and deploying ML models on the AWS cloud platform. Expertise in cloud-native AI services.',
        details: 'Cloud AI Certification',
        duration: 'Verified 2025',
        tags: ['AWS', 'Cloud ML', 'Sagemaker'],
        link: '#',
        color: '#FF9900',
    },
    {
        title: 'Internet of Things (IoT) Essentials',
        issuer: 'IoT Academy',
        image: iotCert,
        description: 'Technical mastery of IoT architectures, sensor integration, and real-time data processing for edge devices.',
        details: 'Hardware & AI integration',
        duration: 'Verified 2025',
        tags: ['Edge AI', 'IoT', 'Sensors'],
        link: '#',
        color: '#10B981',
    },
    {
        title: 'Computer Networking & Architecture',
        issuer: 'Professional Academy',
        image: networkCert,
        description: 'Comprehensive understanding of network protocols, system-level architecture, and security fundamentals.',
        details: 'System Infrastructure',
        duration: 'Verified 2025',
        tags: ['TCP/IP', 'Security', 'Architecture'],
        link: '#',
        color: '#8B5CF6',
    },
    {
        title: 'LinkedIn Professional Credential',
        issuer: 'LinkedIn Learning',
        image: linkedinCert,
        description: 'Demonstrated proficiency in industry-standard skills and technical leadership through verified professional assessments.',
        details: 'Verified Social Credential',
        duration: 'Verified 2025',
        tags: ['Professional', 'Soft Skills', 'Leadership'],
        link: '#',
        color: '#0A66C2',
    },
    {
        title: 'Acceleration Program Graduate',
        issuer: 'Outskill',
        image: outskillCert,
        description: 'Successfully completed the intensive technical acceleration program focused on production-ready engineering.',
        details: 'Career Acceleration',
        duration: 'Verified 2025',
        tags: ['Fullstack', 'System Design', 'MLOps'],
        link: '#',
        color: '#F59E0B',
    },
];

const Certifications = () => {
    return (
        <section className="py-16 md:py-24 fade-up" id="certifications">
            {/* Section Header */}
            <div className="mb-10 px-4 sm:px-0">
                <span className="text-primary font-mono text-[10px] tracking-[0.3em] uppercase mb-3 block text-center sm:text-left">
                    Credentials
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-text-heading mb-3 text-center sm:text-left">
                    Certifications & Badges
                </h2>
                <p className="text-text-body text-sm max-w-lg leading-relaxed text-center sm:text-left">
                    Professional expertise validated by global technology leaders.
                </p>
            </div>

            {/* Cards Grid - More compact gap and 3-4 columns potential */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 sm:px-0">
                {certifications.map((cert) => (
                    <a
                        key={cert.title}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative glass-panel rounded-xl overflow-hidden transition-all duration-300 hover:glow-border-hover hover:-translate-y-1 flex flex-col h-full border border-white/5"
                    >
                        {/* Certificate Visual Header - Substantially Shorter */}
                        <div className="aspect-[21/9] relative overflow-hidden bg-surface-dark border-b border-white/5">
                            {/* Certificate Image */}
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://placehold.co/600x200/0B0F1A/${cert.color.replace('#', '')}/white?text=${cert.issuer.split(' ')[0]}`;
                                }}
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                            {/* Corner Date Badge */}
                            <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[8px] font-mono bg-black/40 border border-white/10 backdrop-blur-md text-white/60">
                                {cert.duration.split(' ').slice(-1)}
                            </div>
                        </div>

                        {/* Content Area - Tighter Padding */}
                        <div className="p-4 flex flex-col flex-grow">
                            <div className="mb-2">
                                <p className="text-[9px] font-mono text-primary uppercase tracking-wider mb-1 opacity-80">{cert.issuer}</p>
                                <h4 className="text-[13px] font-display font-medium text-white leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                    {cert.title}
                                </h4>
                            </div>

                            <div className="mt-auto pt-3 flex flex-wrap gap-1">
                                {cert.tags.slice(0, 3).map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-white/40 border border-white/5"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Simple Footer */}
                            <div className="mt-4 flex items-center justify-between text-[9px] font-mono text-text-dim border-t border-white/5 pt-3">
                                <span className="flex items-center gap-1 uppercase tracking-tighter opacity-60">
                                    Official Credential
                                </span>
                                <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
