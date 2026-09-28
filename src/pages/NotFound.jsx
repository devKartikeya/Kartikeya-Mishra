import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";

const NotFound = () => {
    return (
        <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full" />

                <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-purple-500/5 blur-[120px] rounded-full" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl w-full text-center">

                {/* Small Label */}
                <p className="text-sm uppercase tracking-[0.35em] text-purple-400 mb-4">
                    Page Not Found
                </p>

                {/* 404 */}
                <h1 className="text-[clamp(8rem,25vw,15rem)] leading-[0.75] font-bold tracking-[-0.08em] text-white/95 select-none">
                    404
                </h1>

                {/* Divider */}
                <div className="flex items-center justify-center gap-4 my-10">
                    <span className="w-12 h-px bg-white/10" />

                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />

                    <span className="w-12 h-px bg-white/10" />
                </div>

                {/* Message */}
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    This route doesn't exist.
                </h2>

                <p className="mt-4 max-w-md mx-auto text-gray-500 leading-relaxed">
                    The page you're looking for may have moved, been removed,
                    or never existed in the first place.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                        <FiArrowLeft size={16} />
                        Back to Home
                    </Link>

                    <Link
                        to="/#projects"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/10 bg-white/[0.03] text-gray-300 text-sm font-medium hover:border-white/20 hover:text-white transition-all"
                    >
                        Explore Projects
                        <FiArrowUpRight size={16} />
                    </Link>

                </div>

                {/* Footer */}
                <p className="mt-16 text-xs text-gray-600">
                    © {new Date().getFullYear()} Kartikeya Mishra
                </p>
            </div>
        </main>
    );
};

export default NotFound;