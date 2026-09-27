import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    FiAward,
    FiArrowUpRight,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const certificates = [
    {
        title: "AI Skills Passport",
        issuer: "EY & Microsoft",
        year: "2025",
        description:
            "Certificate of completion for the AI Skills Passport course offered by EY and Microsoft.",
        image: "/KM_AI_EY.jpeg",
    },
    {
        title: "Artificial Intelligence Beginners Guide",
        issuer: "Simplilearn SkillUp",
        year: "2025",
        description:
            "Certificate of completion for the Artificial Intelligence Beginners Guide online course.",
        image: "/KM_AI_Simplilearn.jpeg",
    },
];

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
            // Certificate cards animation
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

            // Refresh after certificate images load
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
                    {certificates.map((certificate) => (
                        <article
                            key={certificate.title}
                            className="certificate-card group h-full rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/20 transition-all duration-500"
                        >
                            {/* Certificate Image */}
                            <div className="relative overflow-hidden bg-white">
                                <img
                                    src={certificate.image}
                                    alt={`${certificate.title} certificate`}
                                    loading="lazy"
                                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50" />
                            </div>

                            {/* Content */}
                            <div className="p-6">

                                {/* Icon + Arrow */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-purple-500/10 border border-purple-500/20">
                                        <FiAward
                                            size={21}
                                            className="text-purple-400"
                                        />
                                    </div>

                                    <FiArrowUpRight
                                        size={20}
                                        className="text-gray-600 group-hover:text-white transition-colors"
                                    />
                                </div>

                                {/* Certificate Info */}
                                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                                    Certification
                                </p>

                                <h3 className="text-xl font-semibold text-white">
                                    {certificate.title}
                                </h3>

                                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                                    {certificate.description}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between mt-8 pt-5 border-t border-white/10">
                                    <span className="text-xs text-gray-500">
                                        {certificate.issuer}
                                    </span>

                                    <span className="text-xs text-gray-500">
                                        {certificate.year}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;