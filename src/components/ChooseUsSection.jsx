import React from 'react'
import { chooseSectionImg } from '../assets'

const ChooseUsSection = () => {
    return (
        <section className='my-10 min-h-screen'>
            <div className="max-w-6xl mx-auto text-center">
                <h1 className='text-5xl mb-10'>Why Small Teams Love alt.f coworking:</h1>
                <div className='flex gap-10 justify-between items-center'>
                    <div className='basis-1/2 bg-black text-white p-10 rounded-xl flex flex-col gap-8'>
                        <div className=''>
                            <p className='text-xl text-left'><strong>Private Offices at Startup-Friendly Pricing</strong> – Move-in-ready spaces with no long-term commitments.</p>
                        </div>
                        <div className=''>
                            <p className='text-xl text-left'><strong>Flexible Growth Options</strong>– Expand your office size as your team grows.</p>
                        </div>
                        <div className=''>
                            <p className='text-xl text-left'><strong>On-Demand Meeting Rooms</strong> – Pay only for what you use, without unnecessary overheads.</p>
                        </div>
                        <div className=''>
                            <p className='text-xl text-left'><strong>Vibrant Yet Professional Setting</strong> – Enjoy networking without the noise of a crowded open floor.</p>
                        </div>
                        <div className=''>
                            <p className='text-xl text-left'><strong>Hassle-Free Operations</strong> – We take care of utilities, internet, maintenance, and housekeeping so you can focus on work.</p>
                        </div>
                    </div>
                    <div className='basis-1/2 overflow-hidden rounded-4xl'>
                        <img className='' src={chooseSectionImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseUsSection