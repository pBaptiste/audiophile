import React from 'react'
import Link from 'next/link'

type Props = {
    title: string;
    desc: string;
    link: string;
}

const NewProduct = ({ title, desc, link }: Props) => {
    return (
        <div className="relative z-[20] flex flex-col items-center xl:items-start text-white text-center xl:text-start max-w-[379px]">
            <h2 className="font-normal text-[0.875rem] leading-[1.188rem] tracking-[10px] uppercase opacity-50 mb-4 md:mb-6">NEW PRODUCT</h2>
            <h1 className="font-bold text-4xl md:text-[3.5rem] leading-10 md:leading-[3.625rem] tracking-[1.28571px] md:tracking-[2px] uppercase mb-6">{title}</h1>
            <p className='font-medium text-[0.938rem] leading-[1.563rem] opacity-75 mb-7 md:mb-10 px-5 md:px-1 xl:pl-0 xl:pr-1'>{desc}</p>
            <Link
                className='bg-custom-orange hover:bg-custom-light-orange transition duration-300 font-bold text-[0.813rem] leading-[1.125rem] tracking-[1px] uppercase py-[15px] pl-[31.5px] pr-[29.5px]'
                href={link}>
                See Product
            </Link>
        </div>
    )
}

export default NewProduct