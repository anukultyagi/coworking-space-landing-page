import React from 'react'
import { brandLogo, headerBg } from '../assets'
import CTCnumBtn from './CTCnumBtn'

const HeroSection = () => {
    return (
        <div
            className="relative w-full pb-10 min-h-screen bg-center bg-cover text-white"
            style={{ backgroundImage: `url(${headerBg})` }}
        >

            <div className="absolute inset-0 bg-black/40"></div>


            <div className="relative z-10 px-4 py-10">
                <nav className="max-w-6xl mx-auto flex justify-between items-center py-6 md:py-10">
                    <div>
                        <img src={brandLogo} alt="brand logo" className="w-auto h-16 md:h-28" />
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <CTCnumBtn size="lg" />
                        <p className="text-center text-sm">Sales Enquiries only</p>
                    </div>
                </nav>

                <div className="max-w-6xl flex justify-start items-start mx-auto py-10">
                    <div className="max-w-[720px] text-start">
                        <h1 className="text-5xl md:text-[90px] leading-tight mb-4">
                            Get the workspace you deserve
                        </h1>
                        <h2 className="text-2xl md:text-4xl mb-8 md:mb-10 leading-8 md:leading-16">
                            Starting at <br /> <strong>₹8</strong>,000/seat/month
                        </h2>
                        <button className="rounded-full border border-white text-white py-4 max-w-96 w-full text-3xl hover:bg-[#ffffffab] hover:text-black cursor-pointer transition-all ease-in-out duration-300">
                            Grab the offer now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
