import React from 'react'
import { motion } from 'framer-motion'
import { featureImg1, featureImg2, featureImg3, featureImg4 } from '../assets'

const FeaturesSection = () => {
    return (
        <section className="min-h-screen my-10 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {[featureImg1, featureImg2, featureImg3, featureImg4].map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 * index }}
                    >
                        <img className="h-72 sm:h-80 md:h-96 w-full object-cover rounded-xl" src={img} alt="feature" />
                    </motion.div>
                ))}


                <motion.div
                    className="lg:col-span-2 bg-[#131313] text-white rounded-2xl p-6 flex flex-col justify-center gap-6 shadow-lg w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <h1 className="text-3xl sm:text-4xl font-bold text-center">Workspace Solutions</h1>

                    <div className="flex flex-col md:flex-row justify-between gap-6">

                        <motion.div
                            className="flex-1 px-2 md:border-r md:border-white"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.7 }}
                        >
                            <h2 className="underline text-xl sm:text-2xl font-semibold mb-4">Private Office</h2>
                            <ol className="list-decimal list-inside space-y-3 text-lg sm:text-xl">
                                <li>Team Rooms</li>
                                <li>Director Cabins</li>
                                <li>Office Suites</li>
                            </ol>
                        </motion.div>


                        <motion.div
                            className="flex-1 px-2 md:border-r md:border-white"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.9 }}
                        >
                            <h2 className="underline text-xl sm:text-2xl font-semibold mb-4">Virtual Office</h2>
                            <ol className="list-decimal list-inside space-y-3 text-lg sm:text-xl">
                                <li>Business Address Plan</li>
                                <li>GST Registration Plan</li>
                                <li>Business Registration Plan</li>
                            </ol>
                        </motion.div>


                        <motion.div
                            className="flex-1 px-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 1.1 }}
                        >
                            <h2 className="underline text-xl sm:text-2xl font-semibold mb-4">Flexible Office</h2>
                            <ol className="list-decimal list-inside space-y-3 text-lg sm:text-xl">
                                <li>Day Pass Bundles</li>
                                <li>Meeting Room</li>
                            </ol>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default FeaturesSection
