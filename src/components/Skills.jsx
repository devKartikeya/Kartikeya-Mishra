import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaGitAlt,
    FaDocker,
    FaJava,
    FaLaravel,
    FaPhp,
    FaJs,
} from "react-icons/fa";

import {
    SiTypescript,
    SiNextdotjs,
    SiExpress,
    SiTailwindcss,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiMongoose,
    SiPrisma,
    SiGithubactions,
    SiLinux,
    SiRedis,
    SiGit,
    SiJavascript,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const categories = [
    {
        title: "Languages",
        description: "Core languages I use to build applications.",
        icon: "01",
        skills: [
            {
                name: "JavaScript",
                icon: <SiJavascript />,
                color: "text-yellow-400",
            },
            {
                name: "TypeScript",
                icon: <SiTypescript />,
                color: "text-blue-400",
            },
            {
                name: "Java",
                icon: <FaJava />,
                color: "text-red-400",
            },
            {
                name: "Python",
                icon: <FaPython />,
                color: "text-yellow-300",
            },
            {
                name: "PHP",
                icon: <FaPhp />,
                color: "text-indigo-400",
            },
        ],
    },

    {
        title: "Frontend",
        description: "Interfaces focused on usability and interaction.",
        icon: "02",
        skills: [
            {
                name: "React",
                icon: <FaReact />,
                color: "text-cyan-400",
            },
            {
                name: "Next.js",
                icon: <SiNextdotjs />,
                color: "text-white",
            },
            {
                name: "Tailwind CSS",
                icon: <SiTailwindcss />,
                color: "text-sky-400",
            },
            {
                name: "GSAP",
                icon: <span className="font-bold text-xs">GSAP</span>,
                color: "text-green-400",
            },
        ],
    },

    {
        title: "Backend",
        description: "APIs, server-side logic and application architecture.",
        icon: "03",
        skills: [
            {
                name: "Node.js",
                icon: <FaNodeJs />,
                color: "text-green-400",
            },
            {
                name: "Express",
                icon: <SiExpress />,
                color: "text-gray-300",
            },
            {
                name: "Laravel",
                icon: <FaLaravel />,
                color: "text-red-500",
            },
            {
                name: "REST APIs",
                icon: <span className="font-bold text-xs">API</span>,
                color: "text-purple-400",
            },
        ],
    },

    {
        title: "Databases",
        description: "Working with both relational and NoSQL systems.",
        icon: "04",
        skills: [
            {
                name: "MongoDB",
                icon: <SiMongodb />,
                color: "text-green-500",
            },
            {
                name: "MySQL",
                icon: <SiMysql />,
                color: "text-blue-400",
            },
            {
                name: "PostgreSQL",
                icon: <SiPostgresql />,
                color: "text-blue-300",
            },
            {
                name: "Mongoose",
                icon: <SiMongoose />,
                color: "text-red-400",
            },
            {
                name: "Prisma",
                icon: <SiPrisma />,
                color: "text-gray-300",
            },
        ],
    },

    {
        title: "DevOps",
        description: "Tools and practices for reliable deployments.",
        icon: "05",
        skills: [
            {
                name: "Docker",
                icon: <FaDocker />,
                color: "text-blue-400",
            },
            {
                name: "GitHub Actions",
                icon: <SiGithubactions />,
                color: "text-gray-200",
            },
            {
                name: "Linux",
                icon: <SiLinux />,
                color: "text-yellow-400",
            },
            {
                name: "Git",
                icon: <FaGitAlt />,
                color: "text-orange-500",
            },
            {
                name: "CI/CD",
                icon: <span className="font-bold text-xs">CI/CD</span>,
                color: "text-purple-400",
            },
        ],
    },

    {
        title: "Engineering",
        description: "Concepts I use to reason about scalable systems.",
        icon: "06",
        skills: [
            {
                name: "System Design",
                icon: <span className="font-bold text-xs">SD</span>,
                color: "text-purple-400",
            },
            {
                name: "Redis",
                icon: <SiRedis />,
                color: "text-red-500",
            },
            {
                name: "Rate Limiting",
                icon: <span className="font-bold text-xs">RL</span>,
                color: "text-orange-400",
            },
            {
                name: "Load Balancing",
                icon: <span className="font-bold text-xs">LB</span>,
                color: "text-cyan-400",
            },
            {
                name: "Horizontal Scaling",
                icon: <span className="font-bold text-xs">HS</span>,
                color: "text-green-400",
            },
        ],
    },
];

const Skills = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // --------------------------------
            // Header animation
            // --------------------------------
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top 80%",
                once: true,

                onEnter: () => {
                    gsap.fromTo(
                        headerRef.current,
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
            // Skill cards animation
            // --------------------------------
            ScrollTrigger.create({
                trigger: gridRef.current,
                start: "top 82%",
                once: true,

                onEnter: () => {
                    const cards =
                        gridRef.current.querySelectorAll(".skill-group");

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
                            stagger: 0.1,
                            ease: "power3.out",
                        }
                    );
                },
            });

            // --------------------------------
            // Initial refresh
            // --------------------------------
            requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });

            const refreshTimer = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 500);

            return () => {
                clearTimeout(refreshTimer);
            };
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="relative px-6 md:px-12 lg:px-20 py-28 overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">

                {/* Header */}
                <div
                    ref={headerRef}
                    className="skills-header mb-14"
                >
                    <p className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-4">
                        Technical toolkit
                    </p>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                            Skills &{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                                expertise
                            </span>
                        </h2>

                        <p className="max-w-lg text-gray-500 leading-relaxed">
                            Technologies and engineering concepts I've worked
                            with while building full-stack applications and
                            exploring scalable systems.
                        </p>
                    </div>
                </div>

                {/* Skills Grid */}
                <div
                    ref={gridRef}
                    className="skills-grid grid md:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {categories.map((category) => (
                        <div
                            key={category.title}
                            className="skill-group group relative rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-sm p-6 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/[0.055]"
                        >
                            {/* Hover glow */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Category header */}
                            <div className="relative flex items-start justify-between mb-7">
                                <div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-purple-400/70">
                                            {category.icon}
                                        </span>

                                        <h3 className="text-lg font-semibold text-white">
                                            {category.title}
                                        </h3>
                                    </div>

                                    <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                                        {category.description}
                                    </p>
                                </div>

                                <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-purple-400 group-hover:border-purple-400/20 transition-colors">
                                    <span className="text-xs">✦</span>
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="relative flex flex-wrap gap-2.5">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="skill-pill group/skill flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-black/30 text-gray-400 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                                    >
                                        <span
                                            className={`text-lg ${skill.color} transition-transform duration-300 group-hover/skill:scale-110`}
                                        >
                                            {skill.icon}
                                        </span>

                                        <span className="text-xs font-medium">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;