import React from 'react'
import { motion } from 'framer-motion'

const ContactFormSection = () => {
    return (
        <section className="min-h-screen flex justify-center items-center px-4">
            <div className="max-w-6xl w-full min-h-[80vh] flex flex-col md:flex-row justify-between items-center gap-10 p-10 bg-[#f1f1f1] rounded-2xl">

                <motion.div
                    className="w-full md:w-1/2 flex flex-col gap-6 md:gap-10 text-center md:text-left"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-5xl md:text-8xl font-medium">Be Bold</h1>
                    <h1 className="text-5xl md:text-8xl font-medium">Be You.</h1>
                </motion.div>


                <motion.div
                    className="w-full md:w-2/5"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h3 className="text-lg md:text-2xl mb-6">
                        Don’t wait to seek the workspace you deserve. Enter your details below to schedule your free call with our dedicated team.
                    </h3>


                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <motion.input
                            className="border-b-2 w-full py-2 bg-transparent"
                            type="text"
                            placeholder="Name"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        />
                        <motion.input
                            className="border-b-2 w-full py-2 bg-transparent"
                            type="email"
                            placeholder="Email"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        />
                        <motion.input
                            className="border-b-2 w-full py-2 bg-transparent"
                            type="text"
                            placeholder="Phone Number"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        />
                        <motion.button
                            type="submit"
                            className="border bg-[#e15252] text-white w-full py-2 hover:bg-transparent hover:text-black hover:border-black transition"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Schedule a call now
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactFormSection
