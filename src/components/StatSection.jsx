import React from 'react'
import CTCBtn from './CTCBtn'

const StatSection = () => {
    return (
        <section className='bg-black py-12'>
            <div className='max-w-6xl mx-auto '>
                <div className='flex gap-10'>
                    <div className='basis-1/3'>
                        <div className='min-h-48 mx-5 rounded-4xl border border-[#fcf7f7] text-white text-center p-2 flex justify-center items-center'>
                            <div>
                                <h1 className='text-7xl font-bold mb-3'>16</h1>
                                <h3 className='text-2xl'>Centres in Delhi NCR</h3>
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/3'>
                        <div className='min-h-48 mx-5 rounded-4xl border border-[#fcf7f7] text-white text-center p-2 flex justify-center items-center'>
                            <div>
                                <h1 className='text-7xl font-bold mb-3'>10,000+</h1>
                                <h3 className='text-2xl'>seats</h3>
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/3'>
                        <div className='min-h-48 mx-5 rounded-4xl border border-[#fcf7f7] text-white text-center p-2 flex justify-center items-center'>
                            <div>
                                <h1 className='text-7xl font-bold mb-3'>93%</h1>
                                <h3 className='text-2xl'>Occupancy rate</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10 text-center'>
                    <CTCBtn />
                </div>
            </div>
        </section>
    )
}

export default StatSection