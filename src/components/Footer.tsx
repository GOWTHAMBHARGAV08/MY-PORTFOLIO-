const Footer = () => {
    return (
        <footer className="w-full border-t border-white/[0.04] py-8 mt-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-sm text-text-heading">
                        Gowtham<span className="text-primary">.AI</span>
                    </span>
                    <span className="text-xs text-text-dim font-mono">
                        © {new Date().getFullYear()}
                    </span>
                </div>
                <p className="text-xs text-text-dim font-mono tracking-wide">
                    Engineered with precision. Deployed with confidence.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
