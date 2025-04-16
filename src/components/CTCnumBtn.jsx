import React from 'react'

const CTCnumBtn = ({ size }) => {
    return (
        <a className={`border hover:bg-[#f47b6080] text-[#f9f7f2] border-[#fcf7f7] ${size == "lg" ? 'text-2xl px-10 py-3' : 'px-6 py-1.5'} `} href="clkn/tel/9958500568">+91 9958500568</a>
    )
}

export default CTCnumBtn