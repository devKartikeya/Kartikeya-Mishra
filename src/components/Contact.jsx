import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        gsap.from(sectionRef.current.querySelectorAll('.contact-card, .contact-title'), {
            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'restart reverse restart reverse'
            }
        })
    }, [])

    return (
        <section ref={sectionRef} id="contact" className="w-full py-20 px-6 md:px-20 text-white">
            <h2 className="contact-title text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-12 text-center">
                Contact Me
            </h2>

            <div className="contact-card backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-lg max-w-6xl mx-auto p-8 md:p-12">
                <form className="flex flex-col space-y-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 text-white focus:outline-none focus:border-pink-500 transition"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 text-white focus:outline-none focus:border-pink-500 transition"
                    />
                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 text-white focus:outline-none focus:border-pink-500 transition"
                    ></textarea>
                    <button
                        type="submit"
                        className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg shadow-md hover:shadow-[0_0_15px_rgba(236,72,153,0.8)] transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact