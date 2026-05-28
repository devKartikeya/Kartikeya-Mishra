import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaJava, FaLaravel } from 'react-icons/fa'
import { SiMongodb, SiTailwindcss, SiExpress, SiGsap } from 'react-icons/si'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const cards = sectionRef.current.querySelectorAll('.skill-card')

        gsap.fromTo(cards,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,       // slightly slower for elegance
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'restart reverse restart reverse' // replay when scrolling back
                }
            }
        )
    }, [])

    const skills = [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <FaReact className="text-gray-200" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "GSAP", icon: <SiGsap className="text-green-300" /> },
        { name: "Java", icon: <FaJava className="text-blue-700" /> },
        { name: "Python", icon: <FaPython className="text-yellow-400" /> },
        { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
        { name: "Laravel", icon: <FaLaravel className="text-red-400" /> }
    ]

    return (
        <section ref={sectionRef} id="skills" className="w-full py-20 px-6 md:px-20 text-white">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-12 text-center">
                Skills
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {skills.map((skill, i) => (
                    <div
                        key={i}
                        className="skill-card backdrop-blur-md bg-white/5 border border-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-pink-500/20 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-purple-600/10 hover:border-pink-500/30"
                    >
                        <div className="text-5xl mb-4">{skill.icon}</div>
                        <h3 className="text-lg font-semibold">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills