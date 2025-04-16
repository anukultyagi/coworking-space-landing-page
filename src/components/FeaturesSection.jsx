import React from 'react'
import { featureImg1, featureImg2, featureImg3, featureImg4 } from '../assets'

const FeaturesSection = () => {
    return (
        <section className='min-h-screen my-10'>
            <div className='max-w-6xl mx-auto grid grid-cols-3 gap-8'>
                <div>
                    <img className='h-96 object-cover' src={featureImg1} alt="feature-image" />
                </div>
                <div>
                    <img className='h-96 object-cover' src={featureImg2} alt="feature-image" />
                </div>
                <div>
                    <img className='h-96 object-cover' src={featureImg3} alt="feature-image" />
                </div>
                <div>
                    <img className='h-96 object-cover' src={featureImg4} alt="feature-image" />
                </div>
                <div className="lg:col-span-2 bg-[#131313] text-white rounded-2xl p-2 flex flex-col justify-around space-y-5 shadow-lg">
                    <h1 className="text-4xl font-bold text-center">Workspace Solutions</h1>
                    <div className="flex flex-col md:flex-row justify-between">
                        {/* Column 1 */}
                        <div className="flex-1 px-3 border-r-2 border-white">
                            <div>
                                <h2 className="underline text-[26px] font-semibold mb-8 ">Private Office</h2>
                                <ol className="list-decimal list-inside space-y-8 text-[22px] ">
                                    <li>Team Rooms</li>
                                    <li>Director Cabins</li>
                                    <li>Office Suites</li>
                                </ol>
                            </div>
                        </div>
                        <div className="flex-1/6 px-3 border-r-2 border-white">
                            <div>
                                <h2 className="underline text-[26px] font-semibold mb-8  ">Virtual Office</h2>
                                <ol className="list-decimal list-inside space-y-8 text-[22px] ">
                                    <li>Business Address Plan</li>
                                    <li>GST Registration Plan</li>
                                    <li>Business Registration Plan</li>
                                </ol>
                            </div>
                        </div>
                        <div className="flex-1 px-3 ">
                            <div>
                                <h2 className="underline text-[26px] font-semibold mb-8  ">Flexible Office</h2>
                                <ol className="list-decimal list-inside space-y-8 text-[22px] ">
                                    <li>Day Pass Bundles</li>
                                    <li>Meeting room</li>
                                </ol>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </section>
    )
}

export default FeaturesSection