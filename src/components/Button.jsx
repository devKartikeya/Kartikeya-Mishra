import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const Button = forwardRef(({ icon, command, to }, ref) => {
    console.log(icon)
    return (
        <button
            ref={ref}
            className="px-5 py-2 items-center bg-gradient-to-r flex gap-2 from-pink-500 to-purple-600 text-white rounded-lg shadow-md hover:scale-105 transition-transform"
        >
        {icon} <Link to={to} target='_blank'>{command}</Link>
        </button>
    )
})

export default Button