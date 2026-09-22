import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { FiMail, FiSend } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);

    const [status, setStatus] = useState("idle");

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-content", {
                opacity: 0,
                y: 40,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    once: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const sendEmail = async (e) => {
        e.preventDefault();

        setStatus("sending");

        try {
            await emailjs.sendForm(
                "service_5shorjo",
                "template_j8q4y3d",
                e.target,
                {
                    publicKey: "YQ2gO3KdP1_B4YvNn",
                }
            );

            e.target.reset();
            setStatus("success");
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="px-6 md:px-12 lg:px-20 py-28"
        >
            <div className="max-w-6xl mx-auto">
                <div className="contact-content rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">
                    <div className="grid lg:grid-cols-2">
                        <div className="p-8 md:p-12 lg:p-16">
                            <p className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-4">
                                Get in touch
                            </p>

                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Let's build something meaningful.
                            </h2>

                            <p className="mt-6 text-gray-400 leading-relaxed">
                                Have a project, opportunity, or simply want to
                                talk about technology? Send me a message and
                                I'll get back to you.
                            </p>

                            <a
                                href="mailto:kartikeya2122008@gmail.com"
                                className="inline-flex items-center gap-3 mt-8 text-gray-300 hover:text-white transition-colors"
                            >
                                <FiMail />
                                kartikeya2122008@gmail.com
                            </a>
                        </div>

                        <form
                            onSubmit={sendEmail}
                            className="p-8 md:p-12 lg:p-16 bg-black/30 flex flex-col gap-5"
                        >
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    name="from_name"
                                    required
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-purple-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-400 mb-2">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="from_email"
                                    required
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-purple-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-400 mb-2">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    rows="5"
                                    required
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-purple-500 transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition-colors disabled:opacity-50"
                            >
                                <FiSend />

                                {status === "sending"
                                    ? "Sending..."
                                    : "Send message"}
                            </button>

                            {status === "success" && (
                                <p className="text-sm text-green-400">
                                    Message sent successfully.
                                </p>
                            )}

                            {status === "error" && (
                                <p className="text-sm text-red-400">
                                    Something went wrong. Please try again or
                                    email me directly.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;