import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const Button = ({
    children,
    href,
    variant = "primary",
    icon,
}) => {
    const styles =
        variant === "primary"
            ? "bg-white text-black hover:bg-gray-200"
            : "border border-white/10 bg-white/5 text-white hover:bg-white/10";

    return (
        <a
            href={href}
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${styles}`}
        >
            {icon}
            {children}
        </a>
    );
};

export default Button;