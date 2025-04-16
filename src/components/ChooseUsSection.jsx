import React from 'react'
import { motion } from 'framer-motion'
import { chooseSectionImg } from '../assets'

const ChooseUsSection = () => {
    return (
        <section className="my-10 px-4 min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto w-full text-center">

                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl mb-10 font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Why Small Teams Love alt.f coworking:
                </motion.h1>

                <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">

                    <motion.div
                        className="w-full lg:w-1/2 bg-black text-white p-6 sm:p-10 rounded-xl flex flex-col gap-6 text-left"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
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
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.4 + 0.2 * i }}
                            >
                                <p className="text-base sm:text-xl">
                                    <strong>{item.title}</strong> – {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>


                    <motion.div
                        className="w-full lg:w-1/2 overflow-hidden rounded-2xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <img
                            className="w-full h-auto object-cover rounded-2xl"
                            src={chooseSectionImg}
                            alt="Why Choose Us"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ChooseUsSection
