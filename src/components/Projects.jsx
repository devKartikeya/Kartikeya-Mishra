import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiExternalLink, FiGithub, FiArrowUpRight, } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Shortify",
        category: "Full-Stack · DevOps",
        description:
            "A scalable URL shortening platform exploring authentication, user-specific links, Redis, rate limiting, Docker, load balancing and CI/CD.",
        image: "Shortify.png",
        technologies: ["React", "MongoDB", "Redis", "Docker"],
        link: "https://github.com/Shortify.git",
        github: "https://github.com/Shortify.git",
    },
    {
        title: "Xpense Tracker",
        category: "MERN Stack",
        description:
            "A full-stack personal finance platform with AuthN, expense & income tracking, analytics, ledger views & administrative controls.",
        image: "X.png",
        technologies: ["React", "Express", "MongoDB", "JWT"],
        link: "https://expense-tracker-mern-project-seven.vercel.app/",
        github:
            "https://github.com/devKartikeya/Expense-Tracker-MERN-Project.git",
    },
    {
        title: "Heritage Junction",
        category: "Laravel · React",
        description:
            "A travel platform for discovering cultural destinations, packages and travel experiences with dynamic backend workflows.",
        image: "Heritage-Junction.png",
        technologies: ["Laravel", "React", "MySQL", "Tailwind"],
        link: "https://github.com/devKartikeya/Heritage-Junction.git",
        github:
            "https://github.com/devKartikeya/Heritage-Junction.git",
    },
    {
        title: "Confab",
        category: "Real-Time Application",
        description:
            "A real-time chat application built around WebSockets for instant communication between multiple users.",
        image: "Confab.png",
        technologies: ["React", "Node.js", "WebSockets"],
        link: "https://chat-app-using-react-ebon.vercel.app",
        github:
            "https://github.com/devKartikeya/Chat-App-Using-React.git",
    },
    {
        title: "Atmoscan",
        category: "API Integration",
        description:
            "A weather dashboard consuming external APIs to present current weather conditions and forecast information.",
        image: "atmoscan2.png",
        technologies: ["React", "API", "TailwindCSS"],
        link: "https://katmoscan.netlify.app",
        github:
            "https://github.com/devKartikeya/Atmoscan.git",
    },
];

const Projects = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // --------------------------------
            // Heading animation
            // --------------------------------
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top 80%",
                once: true,

                onEnter: () => {
                    gsap.fromTo(
                        headingRef.current,
                        {
                            opacity: 0,
                            y: 30,
                        },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            ease: "power3.out",
                        }
                    );
                },
            });

            // --------------------------------
            // Project cards animation
            // --------------------------------
            ScrollTrigger.create({
                trigger: sliderRef.current,
                start: "top 82%",
                once: true,

                onEnter: () => {
                    const cards =
                        sliderRef.current.querySelectorAll(".project-card");

                    gsap.fromTo(
                        cards,
                        {
                            opacity: 0,
                            y: 40,
                        },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.7,
                            stagger: 0.12,
                            ease: "power3.out",
                        }
                    );
                },
            });

            // --------------------------------
            // Recalculate after layout settles
            // --------------------------------
            requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });

            const refreshTimer = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 500);

            // Refresh when images finish loading
            const images =
                sectionRef.current.querySelectorAll("img");

            images.forEach((img) => {
                if (!img.complete) {
                    img.addEventListener(
                        "load",
                        () => ScrollTrigger.refresh(),
                        { once: true }
                    );
                }
            });

            return () => {
                clearTimeout(refreshTimer);
            };
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="px-6 md:px-12 lg:px-20 py-28"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div
                    ref={headingRef}
                    className="project-heading flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12"
                >
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-4">
                            Selected work
                        </p>

                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                            Projects
                        </h2>
                    </div>

                    <p className="max-w-md text-gray-500 leading-relaxed">
                        A collection of applications and experiments where I
                        explore full-stack development, architecture and
                        engineering.
                    </p>
                </div>

                {/* Projects Slider */}
                <div ref={sliderRef}>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1100: {
                                slidesPerView: 3,
                            },
                        }}
                        className="projects-slider !pb-5"
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.title}>
                                <article className="project-card group h-full rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/20 transition-all duration-500">

                                    {/* Image */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={`${project.title} project screenshot`}
                                            loading="lazy"
                                            className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60" />

                                        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-gray-200">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="flex justify-between gap-4">
                                            <h3 className="text-xl font-semibold">
                                                {project.title}
                                            </h3>

                                            <FiArrowUpRight className="text-gray-500 group-hover:text-white transition-colors" />
                                        </div>

                                        <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-5">
                                            {project.technologies.map(
                                                (tech) => (
                                                    <span
                                                        key={tech}
                                                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>

                                        <div className="flex items-center gap-5 mt-6">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-purple-400 transition-colors"
                                            >
                                                Live project
                                                <FiExternalLink />
                                            </a>

                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
                                            >
                                                <FiGithub />
                                                Source
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Projects;