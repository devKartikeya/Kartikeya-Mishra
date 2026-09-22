import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";

const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        gsap.from(".navbar-content", {
            opacity: 0,
            y: -20,
            duration: 0.8,
            ease: "power3.out",
        });
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <nav className="navbar-content max-w-7xl mx-auto mt-4 px-4 md:px-6">
                <div className="h-16 px-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl">
                    {/* Logo */}
                    <a
                        href="#home"
                        className="text-xl font-bold tracking-tight"
                    >
                        Kartikeya
                        <span className="text-purple-400">.</span>
                    </a>

                    {/* Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm text-gray-400 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}

                        <a
                            href="/Kartikeya_Mishra_Developer_Portfolio.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
                        >
                            <FiDownload size={15} />
                            Resume
                        </a>
                    </div>

                    {/* Mobile button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(true)}
                        className="md:hidden p-2 text-gray-300 hover:text-white"
                        aria-label="Open navigation menu"
                        aria-expanded={isOpen}
                    >
                        <FiMenu size={24} />
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
                    isOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                <div
                    onClick={closeMenu}
                    className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                />

                <aside
                    className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#0a0a0a] border-l border-white/10 p-6 transition-transform duration-300 ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <div className="flex justify-between items-center mb-14">
                        <span className="text-xl font-bold">
                            Kartikeya
                            <span className="text-purple-400">.</span>
                        </span>

                        <button
                            onClick={closeMenu}
                            className="p-2 text-gray-400 hover:text-white"
                            aria-label="Close navigation menu"
                        >
                            <FiX size={24} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-7">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={closeMenu}
                                className="text-2xl font-medium text-gray-400 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}

                        <a
                            href="/Kartikeya_Mishra_Developer_Portfolio.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-medium"
                        >
                            <FiDownload />
                            Download Resume
                        </a>
                    </div>
                </aside>
            </div>
        </header>
    );
};

export default Navbar;