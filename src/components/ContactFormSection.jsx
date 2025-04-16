import React from 'react'
import CTCBtn from './CTCBtn'

const ContactFormSection = () => {
    return (
        <section className='min-h-screen flex justify-center items-center'>
            <div className='max-w-7xl min-h-[80vh] flex justify-center items-center mx-auto rounded-4xl p-10 bg-[#f1f1f1]'>
                <div className="flex justify-between items-center">
                    <div className='basis-1/2 flex flex-col gap-10'>
                        <h1 className='text-8xl'>Be Bold</h1>
                        <h1 className='text-8xl'>Be You.</h1>
                    </div>
                    <div className='basis-2/5'>
                        <h3 className='text-2xl mb-8'>Don’t wait to seek the workspace you deserve. Enter your details below to schedule your free call with our dedicated team.
                        </h3>
                        <form action="" className='grid grid-cols-2 gap-8'>
                            <div>
                                <input className=' border-b-2 w-full py-1' type="text" placeholder='Name' />
                            </div>
                            <div>
                                <input className='border-b-2 w-full py-1' type="email" placeholder='Email' />
                            </div>
                            <div>
                                <input className='border-b-2 w-full py-1' type="text" placeholder='Phone Number' />
                            </div>
                            <div>
                                <button className='border bg-[#e15252] text-white w-full py-1 hover:bg-transparent hover:text-black hover:border-black'>Schedule a call now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactFormSection