import React from 'react'
import { chooseSectionImg } from '../assets'

const ChooseUsSection = () => {
    return (
        <section className="my-10 px-4 min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto w-full text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl mb-10 font-semibold">
                    Why Small Teams Love alt.f coworking:
                </h1>

                <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
                    <div className="w-full lg:w-1/2 bg-black text-white p-6 sm:p-10 rounded-xl flex flex-col gap-6 text-left">
                        {[
                            {
                                title: "Private Offices at Startup-Friendly Pricing",
                                text: "Move-in-ready spaces with no long-term commitments."
                            },
                            {
                                title: "Flexible Growth Options",
                                text: "Expand your office size as your team grows."
                            },
                            {
                                title: "On-Demand Meeting Rooms",
                                text: "Pay only for what you use, without unnecessary overheads."
                            },
                            {
                                title: "Vibrant Yet Professional Setting",
                                text: "Enjoy networking without the noise of a crowded open floor."
                            },
                            {
                                title: "Hassle-Free Operations",
                                text: "We take care of utilities, internet, maintenance, and housekeeping so you can focus on work."
                            }
                        ].map((item, i) => (
                            <div key={i}>
                                <p className="text-base sm:text-xl">
                                    <strong>{item.title}</strong> – {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl">
                        <img
                            className="w-full h-auto object-cover rounded-2xl"
                            src={chooseSectionImg}
                            alt="Why Choose Us"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseUsSection
