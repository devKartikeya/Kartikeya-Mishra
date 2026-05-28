import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const aboutRef = useRef(null)
    const dividerRefs = useRef([])
    const nameRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top 75%",   // starts when section is clearly visible
                toggleActions: "play none none none",
                once: true
            }
        })

        tl.from(dividerRefs.current, {
            width: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        })

        tl.from(nameRef.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power2.out"
        }, "-=0.5")

        tl.from(aboutRef.current.querySelector("p"), {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power2.out"
        }, "-=0.5")
    }, [])

    return (
        <section
            ref={aboutRef}
            id="about"
            className="relative w-full py-16 px-6 md:px-20 flex flex-col items-center"
        >
            {/* Neon Divider Top */}
            <div
                ref={el => (dividerRefs.current[0] = el)}
                className="bg-gradient-to-r from-pink-500 to-purple-600 h-[2px] w-[60%] mx-auto mb-8 rounded-full shadow-[0_0_12px_rgba(236,72,153,0.7)]"
            ></div>

            {/* Glassmorphism Card */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-lg w-90%] p-8 md:p-10 text-center md:text-left">
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
                    I see code as more than logic — it’s my <span className="text-pink-400 font-semibold">vision</span> brought to life.
                    I design interfaces that breathe, empower, and inspire with clarity.
                    Driven by <span className="text-purple-400 font-semibold">curiosity</span> and creativity, I craft experiences that are functional yet unforgettable.
                    For me, development is <span className="text-pink-400 font-semibold">storytelling</span>, a way to leave a mark in the world of <span className="text-purple-400 font-semibold">innovation</span>.
                </p>
                <h2 ref={nameRef} className="text-xl italic md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 text-right mt-6">
                    ~ Kartikeya Mishra
                </h2>
            </div>

            {/* Neon Divider Bottom */}
            <div
                ref={el => (dividerRefs.current[1] = el)}
                className="bg-gradient-to-r from-purple-600 to-pink-500 h-[2px] w-[60%] mx-auto mt-8 rounded-full shadow-[0_0_12px_rgba(147,51,234,0.7)]"
            ></div>
        </section>
    )
}

export default About