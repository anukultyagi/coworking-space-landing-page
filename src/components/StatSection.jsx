import React from 'react'
import CTCBtn from './CTCBtn'

const StatSection = () => {
    return (
        <section className="bg-black py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-10">
                    {[
                        { number: '16', label: 'Centres in Delhi NCR' },
                        { number: '10,000+', label: 'seats' },
                        { number: '93%', label: 'Occupancy rate' },
                    ].map((stat, index) => (
                        <div key={index} className="flex-1">
                            <div className="min-h-48 rounded-4xl border border-white text-white text-center p-6 flex justify-center items-center">
                                <div>
                                    <h1 className="text-5xl md:text-7xl font-bold mb-2">{stat.number}</h1>
                                    <h3 className="text-xl md:text-2xl">{stat.label}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <CTCBtn />
                </div>
            </div>
        </section>
    )
}

export default StatSection
