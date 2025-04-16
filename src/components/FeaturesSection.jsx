import React from 'react'
import { featureImg1, featureImg2, featureImg3, featureImg4 } from '../assets'

const FeaturesSection = () => {
    return (
        <section className="min-h-screen my-10 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[featureImg1, featureImg2, featureImg3, featureImg4].map((img, index) => (
                    <div key={index}>
                        <img className="h-72 sm:h-80 md:h-96 w-full object-cover rounded-xl" src={img} alt="feature" />
                    </div>
                ))}

                <div className="lg:col-span-2 bg-[#131313] text-white rounded-2xl p-6 flex flex-col justify-center gap-6 shadow-lg w-full">
                    <h1 className="text-3xl sm:text-4xl font-bold text-center">Workspace Solutions</h1>

                    <div className="flex flex-col md:flex-row justify-between gap-6">
                        {/* Private Office */}
                        <div className="flex-1 px-2 md:border-r md:border-white">
                            <h2 className="underline text-xl sm:text-2xl font-semibold mb-4">Private Office</h2>
                            <ol className="list-decimal list-inside space-y-3 text-lg sm:text-xl">
                                <li>Team Rooms</li>
                                <li>Director Cabins</li>
                                <li>Office Suites</li>
                            </ol>
                        </div>

                        {/* Virtual Office */}
                        <div className="flex-1 px-2 md:border-r md:border-white">
                            <h2 className="underline text-xl sm:text-2xl font-semibold mb-4">Virtual Office</h2>
                            <ol className="list-decimal list-inside space-y-3 text-lg sm:text-xl">
                                <li>Business Address Plan</li>
                                <li>GST Registration Plan</li>
                                <li>Business Registration Plan</li>
                            </ol>
                        </div>

                        {/* Flexible Office */}
                        <div className="flex-1 px-2">
                            <h2 className="underline text-xl sm:text-2xl font-semibold mb-4">Flexible Office</h2>
                            <ol className="list-decimal list-inside space-y-3 text-lg sm:text-xl">
                                <li>Day Pass Bundles</li>
                                <li>Meeting Room</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
