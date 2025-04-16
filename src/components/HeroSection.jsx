import React from 'react'

const HeroSection = () => {
    return (
        <section
            className="relative w-full h-[100vh] bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://landing-page.altfcoworking.com/assets/images/banner/altf_hyderabad_banner.jpg')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0a0a0a] bg-opacity-70" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-white h-full px-4 text-center">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
                    Coworking Space in Hyderabad for Startups, Freelancers & Enterprises
                </h1>
                <p className="text-lg md:text-xl mt-4 max-w-2xl">
                    Premium workspace solutions for growing teams. Fully-managed, plug-and-play shared office space.
                </p>
                <a
                    href="#book-a-tour"
                    className="mt-6 px-6 py-3 bg-[#FFCC33] text-black font-semibold rounded hover:bg-[#e6b800] transition"
                >
                    Book A Tour
                </a>
            </div>
        </section>
    )
}

export default HeroSection