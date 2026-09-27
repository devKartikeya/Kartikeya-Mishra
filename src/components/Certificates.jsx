import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    FiAward,
    FiArrowUpRight,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const Certificates = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const contentRef = useRef(null);

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
            // Certificate content animation
            // --------------------------------
            ScrollTrigger.create({
                trigger: contentRef.current,
                start: "top 82%",
                once: true,

                onEnter: () => {
                    const items =
                        contentRef.current.querySelectorAll(
                            ".certificate-card"
                        );

                    gsap.fromTo(
                        items,
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

            return () => {
                clearTimeout(refreshTimer);
            };
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="certificates"
            className="px-6 md:px-12 lg:px-20 py-28"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div
                    ref={headingRef}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12"
                >
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-4">
                            Credentials
                        </p>

                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                            Certificates
                        </h2>
                    </div>

                    <p className="max-w-md text-gray-500 leading-relaxed">
                        A collection of certifications and credentials
                        representing continuous learning and technical growth.
                    </p>
                </div>

                {/* Certificates */}
                <div
                    ref={contentRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >

                    {/* Certificate Card */}
                    <article className="certificate-card group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 transition-all duration-500">

                        {/* Icon */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-purple-500/10 border border-purple-500/20">
                                <FiAward
                                    size={22}
                                    className="text-purple-400"
                                />
                            </div>

                            <FiArrowUpRight
                                className="text-gray-600 group-hover:text-white transition-colors"
                                size={20}
                            />
                        </div>

                        {/* Certificate Info */}
                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                                Certification
                            </p>

                            <h3 className="text-xl font-semibold text-white">
                                Certificate Title
                            </h3>

                            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                                Certificate description or issuing organization
                                can be added here later.
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between mt-8 pt-5 border-t border-white/10">
                            <span className="text-xs text-gray-500">
                                Issued by Organization
                            </span>

                            <span className="text-xs text-gray-500">
                                2026
                            </span>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    );
};

export default Certificates;