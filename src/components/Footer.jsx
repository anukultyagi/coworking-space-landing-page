import React from 'react'
import { brandLogo } from '../assets'
import CTCnumBtn from './CTCnumBtn'

const Footer = () => {
    return (
        <footer className='bg-black text-white py-5 px-2'>
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                <div>
                    <img className='' src={brandLogo} alt="brand logo" />
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <CTCnumBtn />
                    <p className='text-center text-sm'>Sales Enquiries only</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer