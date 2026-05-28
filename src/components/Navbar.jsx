import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import gsap from 'gsap'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const logoRef = useRef(null)
  const linksRef = useRef([])
  const buttonRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Logo first
    tl.from(logoRef.current, {
      opacity: 0,
      x: -50,
      duration: 0.8
    })

    // Then links staggered
    tl.from(linksRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      stagger: 0.15
    }, "-=0.3") // overlap slightly with logo

    // Finally Resume button bounce
    tl.from(buttonRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, "-=0.2") // overlap slightly with links
  }, [])

  return (
    <nav id="navbar" className="w-screen h-16 bg-gray-950 flex items-center justify-between px-6 shadow-lg fixed top-0 z-50">
      {/* Logo */}
      <div ref={logoRef} className="text-white text-2xl font-bold tracking-wide">
        Kartikeya<span className="text-pink-500">.</span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 text-gray-300 font-medium items-center">
        {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, i) => (
          <li
            key={item}
            ref={el => (linksRef.current[i] = el)}
            className="hover:text-pink-500 transition-colors cursor-pointer"
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
        {/* CTA Button (Desktop only) */}
        <div ref={buttonRef}>
          <Button command="Resume" />
        </div>
      </ul>

      {/* Hamburger (Mobile) */}
      <div className="md:hidden text-white cursor-pointer text-2xl" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 transform transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col items-center space-y-6 mt-10 text-gray-300 font-medium">
          <div ref={logoRef} className="text-white text-2xl font-bold tracking-wide">
            Kartikeya<span className="text-pink-500">.</span>
          </div>
          <a href="#home" className="hover:text-pink-500">Home</a>
          <a href="#about" className="hover:text-pink-500">About</a>
          <a href="#projects" className="hover:text-pink-500">Projects</a>
          <a href="#skills" className="hover:text-pink-500">Skills</a>
          <a href="#contact" className="hover:text-pink-500">Contact</a>
          <button className="px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg shadow-md">
            Resume
          </button>
        </div>
      </div>

      {/* Overlay when drawer is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  )
}

export default Navbar
