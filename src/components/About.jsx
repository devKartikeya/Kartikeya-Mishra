import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-content", {
                opacity: 0,
                y: 40,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    once: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="px-6 md:px-12 lg:px-20 py-28"
        >
            <div className="max-w-5xl mx-auto">
                <p className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-4">
                    About me
                </p>

                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-10">
                    Building software with{" "}
                    <span className="text-gray-500">purpose.</span>
                </h2>

                <div className="about-content grid md:grid-cols-[1.5fr_1fr] gap-12">
                    <div className="text-gray-400 text-lg leading-relaxed space-y-5">
                        <p>
                            I'm a full-stack developer interested in building
                            applications that are not only functional, but
                            thoughtfully engineered.
                        </p>

                        <p>
                            My journey started with web development and has
                            gradually expanded into backend architecture,
                            databases, system design, containerization and
                            CI/CD.
                        </p>

                        <p>
                            I enjoy understanding what happens behind the
                            interface — how applications communicate, scale,
                            store data and remain reliable as complexity grows.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            ["01", "Full-Stack Development"],
                            ["02", "Backend Engineering"],
                            ["03", "System Design"],
                            ["04", "DevOps & CI/CD"],
                        ].map(([number, title]) => (
                            <div
                                key={number}
                                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition-colors"
                            >
                                <span className="text-xs text-purple-400">
                                    {number}
                                </span>

                                <p className="mt-5 text-sm font-medium text-gray-200">
                                    {title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
