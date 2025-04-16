import React from 'react'
import { motion } from 'framer-motion'

const LaunchSection = () => {
    return (
        <section className="my-20 px-4">
            <div className="max-w-6xl mx-auto text-center">

                <motion.h1
                    className="text-4xl sm:text-5xl mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Launching in Hyderabad – May 1, 2025
                </motion.h1>


                <motion.p
                    className="max-w-[865px] mx-auto text-lg sm:text-xl font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    We are excited to bring alt.f coworking to Hyderabad with a workspace that perfectly fits the needs of 4–30 member teams. Whether you're a tech startup, creative agency, consulting firm, or remote team, we provide a distraction-free, professional, and high-energy environment to help you grow.
                </motion.p>
            </div>
        </section>
    )
}

export default LaunchSection
