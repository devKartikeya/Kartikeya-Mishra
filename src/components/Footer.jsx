import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="relative w-full bg-black text-gray-300 py-10 px-6 md:px-20 mt-20">
            {/* Neon Divider */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 h-[2px] w-[80%] mx-auto mb-8 rounded-full shadow-[0_0_12px_rgba(236,72,153,0.7)]"></div>

            {/* Content */}
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto space-y-6 md:space-y-0">
                {/* Left: Branding */}
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                        Kartikeya<span className="text-pink-500">.</span>
                    </h3>
                    <p className="text-sm mt-2 text-gray-400">
                        Crafting digital experiences with passion, precision, and innovation.
                    </p>
                    <p className="text-sm mt-2 text-gray-400">
                       <span className="text-gray-400 font-bold">For Business : </span> <a href="mailto:kartikeya2122008@gmail.com" className="hover:text-pink-500 transition-colors">
                            kartikeya2122008@gmail.com
                        </a>
                    </p>
                </div>

                {/* Center: Social Links */}
                <div className="flex space-x-6 text-xl">
                    <a
                        href="https://github.com/devKartikeya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-500 transition-colors"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/kartikeya-mishra-8199973a9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-500 transition-colors"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                    >
                        <FaTwitter />
                    </a>
                </div>

                {/* Right: Quick Links */}
                <div className="flex space-x-6 text-sm">
                    <a href="#about" className="hover:text-pink-500 transition-colors" smooth={true} duration={500}>
                        About
                    </a>
                    <a href="#projects" className="hover:text-pink-500 transition-colors" smooth={true} duration={500}>
                        Projects
                    </a>
                    <a href="#skills" className="hover:text-pink-500 transition-colors" smooth={true} duration={500}>
                        Skills
                    </a>
                    <a href="#contact" className="hover:text-pink-500 transition-colors" smooth={true} duration={500}>
                        Contact
                    </a>
                </div>
            </div>

            {/* Bottom Note */}
            <div className="text-center text-xs text-gray-500 mt-8">
                © {new Date().getFullYear()} Kartikeya Mishra. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer