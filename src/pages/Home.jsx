import React, { useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import gsap from 'gsap'
import Button from '../components/Button'
import About from '../components/About'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

const Home = () => {
    const nameRef = useRef(null)
    const imageRef = useRef(null)
    const buttonsRef = useRef([])
    const roleRef = useRef(null)

    useEffect(() => {
        // Image animation (slower)
        gsap.fromTo(imageRef.current,
            { opacity: 0, x: -100 },
            {
                opacity: 1,
                x: 0,
                duration: 1.5, // slower
                ease: "power3.out",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse"
                }
            }
        )

        // Name typing (slower)
        const text = "Kartikeya Mishra"
        const chars = text.split("")
        nameRef.current.innerHTML = ""
        chars.forEach(char => {
            const span = document.createElement("span")
            span.textContent = char
            span.style.opacity = 0
            nameRef.current.appendChild(span)
        })

        gsap.to(nameRef.current.children, {
            opacity: 1,
            duration: 0.15, // slower per character
            stagger: 0.15,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: nameRef.current,
                start: "top 80%",
                toggleActions: "restart reverse restart reverse"
            }
        })

        // Role typing (slower)
        const roles = "UX Designer | MERN Developer | DevOps Enthusiast"
        const roleChars = roles.split("")
        roleRef.current.innerHTML = ""
        roleChars.forEach(char => {
            const span = document.createElement("span")
            span.textContent = char
            span.style.opacity = 0
            roleRef.current.appendChild(span)
        })

        gsap.to(roleRef.current.children, {
            opacity: 1,
            duration: 0.08, // slower
            stagger: 0.08,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: roleRef.current,
                start: "top 80%",
                toggleActions: "restart reverse restart reverse"
            }
        })

        // Buttons (after text)
        gsap.from(buttonsRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            stagger: 0.3,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: roleRef.current, // wait until role section is visible
                start: "bottom 99%",      // triggers after text finishes
                toggleActions: "play reverse play reverse"
            }
        })
    }, [])



    return (
        <div className="bg-black w-screen min-h-screen flex flex-col" id='home'>
            <Navbar />
            <div className="flex flex-1 flex-col md:flex-row items-center md:justify-between justify-center 
                  px-6 md:px-20 space-y-10 md:space-y-0 md:space-x-20 pt-20 md:pt-24">

                {/* Left side image */}
                <div ref={imageRef} className="w-48 h-48 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-white flex-shrink-0 mx-auto md:mx-0">
                    <img src="/Profile.jpeg" alt="Profile" className="w-full h-full object-cover rounded-full" />
                </div>

                {/* Right side content */}
                <div className="text-white text-center md:text-left w-full md:w-1/2">
                    <h1 ref={nameRef} className="text-3xl md:text-8xl font-bold"></h1>

                    <div className="border-t border-gray-600 w-32 md:w-48 mx-auto md:mx-0 my-6"></div>

                    <div ref={roleRef} className="text-xl md:text-2xl font-light tracking-wide"></div>

                    <div className="border-t border-gray-600 w-32 md:w-48 mx-auto md:mx-0 my-6"></div>

                    <div className="mt-8 flex md:flex-row gap-4 justify-center md:justify-start items-center">
                        <Button icon={<FaGithub />} command="GitHub" ref={el => (buttonsRef.current[0] = el)} to="https://github.com/devKartikeya" />
                        <Button icon={<FaLinkedin />} command="LinkedIn" ref={el => (buttonsRef.current[1] = el)} to="https://linkedin.com/in/kartikeya-mishra-8199973a9" />
                    </div>
                </div>
            </div>
            <About />
            <Projects />
            <Footer />
        </div>
    )
}

export default Home