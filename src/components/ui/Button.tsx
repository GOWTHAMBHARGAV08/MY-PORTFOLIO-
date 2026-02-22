import { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    className,
    variant = 'primary',
    children,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-primary hover:bg-primary-dark text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:shadow-[0_0_20px_rgba(79,143,247,0.12),inset_0_1px_0_rgba(255,255,255,0.08)]",
        outline: "border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.12] text-text-heading",
        ghost: "text-text-body hover:text-text-heading hover:bg-white/[0.04]",
    };

    const sizes = "h-11 px-6 py-2 text-sm";

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes, className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
