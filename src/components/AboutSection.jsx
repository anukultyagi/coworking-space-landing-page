import React from 'react'
import { motion } from 'framer-motion'

const AboutSection = () => {
    return (
        <section className="my-10 px-4">
            <div className="max-w-6xl mx-auto text-center">

                <motion.h1
                    className="text-4xl md:text-5xl mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    About
                </motion.h1>


                <motion.p
                    className="mb-4 max-w-[865px] mx-auto text-lg md:text-xl font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    At alt.f coworking, we specialize in creating cost-effective, fully serviced workspaces designed for small teams, startups, and growing businesses. Since 2016, we’ve helped 500+ businesses scale by providing plug-and-play private offices that eliminate the hassle of long leases and overhead costs.
                </motion.p>
            </div>
        </section>
    )
}

export default AboutSection
