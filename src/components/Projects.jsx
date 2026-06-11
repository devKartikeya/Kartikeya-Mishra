import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const cards = sectionRef.current.querySelectorAll('.project-card')

        gsap.fromTo(cards,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.25,
                ease: 'expo.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    once: true
                }
            }
        )
    }, [])


    const projects = [
        {
            title: "Xpense Tracker",
            description:
                "A full‑stack MERN application designed to empower users with complete financial control. It combines expense tracking, income management, animated charts & graphs, ledger view and budget analysis with a secure authentication system. Xpense Tracker delivers a reliable and scalable platform for smarter money management.",
            image: "/xpense.png",
            link: "https://expense-tracker-mern-project-seven.vercel.app/",
            github: "https://github.com/devKartikeya/Expense-Tracker-MERN-Project.git"
        },
        {
            title: "Portfolio Website",
            description:
                "A modern, responsive portfolio built with React, TailwindCSS, and GSAP animations. It showcases my skills, projects, and contact information in a sleek single‑page design with glassmorphism styling and smooth transitions. The site emphasizes premium UI aesthetics and interactive elements to leave a lasting impression.",
            image: "/Portfolio.png",
            link: "http://localhost:5173/",
            github: "https://github.com/devKartikeya/Kartikeya-Mishra.git"
        },
        {
            title: "Confab - Chat App",
            description:
                "A real‑time chat application leveraging React, Node.js, and WebSockets to provide secure and rapid communication. Confab supports multiple users simultaneously, offering instant message delivery, responsive design, and a clean interface. Built with scalability in mind, it demonstrates my ability to implement live data streams and socket‑based interactions.",
            image: "/Confab.png",
            link: "https://chat-app-using-react-ebon.vercel.app",
            github: "https://github.com/devKartikeya/Chat-App-Using-React.git"
        },
        {
            title: "Atmoscan",
            description:
                "A weather dashboard that delivers real‑time forecasts with clean visuals and detailed metrics. Atmoscan integrates APIs to provide temperature, humidity, wind speed, and extended forecasts, all wrapped in a modern UI. Designed for clarity and accessibility, it highlights my skills in API integration, responsive layouts, and data visualization.",
            image: "/atmoscan2.png",
            link: "https://katmoscan.netlify.app",
            github: "https://github.com/devKartikeya/Atmoscan.git"
        }
    ]


    return (
        <section ref={sectionRef} id="projects" className="w-full py-20 px-6 md:px-20 text-white">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-10 text-center">
                Projects
            </h2>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                className="w-full"
            >
                {projects.map((proj, i) => (
                    <SwiperSlide key={i}>
                        <div className="project-card backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 
                hover:scale-105 transition-transform duration-500 will-change-transform">
                            <img src={proj.image} alt={proj.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                            <p className="text-gray-300 text-sm mb-4 text-center">{proj.description}</p>
                            <Link
                                to={proj.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 mx-3 my-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg shadow-md hover:shadow-[0_0_15px_rgba(236,72,153,0.8)] transition"
                            >
                                View Project
                            </Link>
                            <Link
                                to={proj.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 mx-3 my-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg shadow-md hover:shadow-[0_0_15px_rgba(236,72,153,0.8)] transition"
                            >
                                View GitHub
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Projects