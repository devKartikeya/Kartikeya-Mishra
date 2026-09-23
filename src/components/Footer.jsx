import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 px-6 md:px-12 lg:px-20 py-14">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div>
                        <h3 className="text-xl font-bold">
                            Kartikeya
                            <span className="text-purple-400">.</span>
                        </h3>

                        <p className="mt-2 text-sm text-gray-500 max-w-sm">
                            Full-stack developer exploring scalable systems,
                            modern web technologies and DevOps.
                        </p>
                    </div>

                    <div className="flex items-center gap-5">
                        <a
                            href="https://github.com/devKartikeya"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="text-gray-500 hover:text-white transition-colors"
                        >
                            <FaGithub size={20} />
                        </a>

                        <a
                            href="https://linkedin.com/in/kartikeya-mishra-8199973a9"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-gray-500 hover:text-white transition-colors"
                        >
                            <FaLinkedin size={20} />
                        </a>

                        <a
                            href="mailto:kartikeya2122008@gmail.com"
                            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            Let's talk
                            <FiArrowUpRight />
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-8 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-gray-600">
                    <p>
                        © {new Date().getFullYear()} Kartikeya Mishra
                    </p>

                    <p>
                        Designed & built with React
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;