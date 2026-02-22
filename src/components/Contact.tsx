import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
    {
        icon: Github,
        label: 'GitHub',
        href: 'https://github.com/GOWTHAMBHARGAV08',
        description: 'View my repositories',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/gowtham-bhargav',
        description: 'Connect with me',
    },
    {
        icon: Mail,
        label: 'Email',
        href: 'https://mail.google.com/mail/?view=cm&to=gowthambhargav619@gmail.com&su=Hi%20from%20your%20Portfolio',
        description: 'Get in touch',
    },
];

const Contact = () => {
    return (
        <section className="py-20 md:py-32 fade-up" id="contact">
            <div className="relative">
                {/* Large glass container */}
                <div className="relative glass-panel rounded-2xl p-10 md:p-16 text-center overflow-hidden">
                    {/* Radial glow behind */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-100"
                            style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 60%)' }}
                        />
                    </div>

                    <div className="relative z-10">
                        <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-6 block">
                            Let's Build Together
                        </span>

                        <h2 className="text-3xl md:text-5xl font-display font-bold text-text-heading mb-6 max-w-xl mx-auto leading-tight">
                            Ready to build your next AI system?
                        </h2>

                        <p className="text-text-body max-w-md mx-auto mb-10 leading-relaxed">
                            I'm currently open to new opportunities — whether it's a full-time role, freelance project, or an interesting collaboration.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <a
                                href="https://wa.me/917780125919?text=Hi%20Gowtham%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 h-12 px-8 rounded-lg text-white font-medium text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.25)] hover:-translate-y-0.5"
                                style={{ background: '#25D366' }}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Start a Conversation
                            </a>
                        </div>

                        {/* Social Cards */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-panel-light rounded-xl p-5 w-40 text-center transition-all duration-300 hover:glow-border-hover hover:-translate-y-1 group"
                                >
                                    <link.icon className="w-5 h-5 mx-auto mb-3 text-text-muted group-hover:text-primary transition-colors" />
                                    <div className="text-sm font-medium text-text-heading mb-1">{link.label}</div>
                                    <div className="text-[10px] font-mono text-text-dim">{link.description}</div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
