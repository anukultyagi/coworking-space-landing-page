import React from 'react'
import { brandLogo } from '../assets'
import CTCnumBtn from './CTCnumBtn'

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <img src={brandLogo} alt="brand logo" className="h-20 w-auto" />
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <CTCnumBtn />
                    <p className="text-center text-sm">Sales Enquiries only</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
