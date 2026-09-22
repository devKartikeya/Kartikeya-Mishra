import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            tl.from(".hero-image", {
                opacity: 0,
                x: -50,
                duration: 1,
            })
                .from(
                    ".hero-eyebrow",
                    {
                        opacity: 0,
                        y: 20,
                        duration: 0.6,
                    },
                    "-=0.5"
                )
                .from(
                    ".hero-title",
                    {
                        opacity: 0,
                        y: 30,
                        duration: 0.8,
                    },
                    "-=0.3"
                )
                .from(
                    ".hero-description",
                    {
                        opacity: 0,
                        y: 25,
                        duration: 0.7,
                    },
                    "-=0.4"
                )
                .from(
                    ".hero-actions",
                    {
                        opacity: 0,
                        y: 20,
                        duration: 0.6,
                    },
                    "-=0.3"
                )
                .from(
                    ".hero-socials",
                    {
                        opacity: 0,
                        y: 15,
                        duration: 0.5,
                    },
                    "-=0.3"
                );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={heroRef}
            className="min-h-screen bg-[#050505] text-white overflow-x-hidden"
        >
            <Navbar />

            {/* HERO */}
            <main id="home">
                <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-24">
                    {/* Background glow */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full" />
                        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-500/10 blur-[120px] rounded-full" />
                    </div>

                    <div className="relative max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className="hero-image flex justify-center lg:justify-start order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-600/20 blur-2xl" />

                                <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-[2px] bg-gradient-to-br from-white/40 via-purple-500/50 to-pink-500/40">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-black">
                                        <img
                                            src="/Profile.jpeg"
                                            alt="Kartikeya Mishra"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="absolute -bottom-4 -right-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
                                    <p className="text-xs text-gray-400">
                                        Currently building
                                    </p>
                                    <p className="text-sm font-semibold">
                                        Shortify
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="order-1 lg:order-2 text-center lg:text-left">
                            <p className="hero-eyebrow text-sm uppercase tracking-[0.3em] text-purple-400 mb-5">
                                Full-Stack Developer | System Design | DevOps Enthusiast
                            </p>

                            <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-normal leading-[0.95]">
                                Kartikeya
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
                                    Mishra
                                </span>
                            </h1>

                            <p className="hero-description mt-7 max-w-2xl mx-auto lg:mx-0 text-gray-400 text-base md:text-lg leading-relaxed">
                                I build scalable web applications and explore
                                the engineering behind reliable software —
                                from full-stack development and system design
                                to Docker and CI/CD.
                            </p>

                            <div className="hero-actions flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                                <a
                                    href="#projects"
                                    className="group px-6 py-3 rounded-xl bg-white text-black font-medium transition-all duration-300 hover:bg-gray-200 hover:-translate-y-1"
                                >
                                    View my work
                                    <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                                        →
                                    </span>
                                </a>

                                <a
                                    href="#contact"
                                    className="px-6 py-3 rounded-xl border border-white/15 bg-white/5 backdrop-blur-md font-medium hover:bg-white/10 hover:border-white/25 transition-all duration-300"
                                >
                                    Let's connect
                                </a>
                            </div>

                            <div className="hero-socials flex justify-center lg:justify-start items-center gap-5 mt-8">
                                <a
                                    href="https://github.com/devKartikeya"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <FaGithub size={22} />
                                </a>

                                <a
                                    href="https://linkedin.com/in/kartikeya-mishra-8199973a9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="text-gray-400 hover:text-blue-500 transition-colors"
                                >
                                    <FaLinkedin size={22} />
                                </a>

                                <span className="h-px w-12 bg-white/10" />

                                <span className="text-xs text-gray-500">
                                    Lucknow, India
                                </span>
                            </div>
                        </div>
                    </div>

                    <a
                        href="#about"
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white transition-colors"
                        aria-label="Scroll to About section"
                    >
                        <FaArrowDown className="animate-bounce" />
                    </a>
                </section>

                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>

            <Footer />
        </div>
    );
};

export default Home;