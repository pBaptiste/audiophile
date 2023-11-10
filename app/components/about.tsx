import React from 'react'
import ResponsiveImage from './responsive-image'

const About = () => {
    return (
        <div className='flex flex-col xl:flex-row'>
            <div className='relative w-full h-[300px] xl:w-[540px] xl:h-[588px] mb-10 xl:order-2 xl:flex-none'>
                <ResponsiveImage
                    sm='/assets/shared/mobile/image-best-gear.jpg'
                    md='/assets/shared/tablet/image-best-gear.jpg'
                    lg='/assets/shared/desktop/image-best-gear.jpg'
                    alt='About section image'
                    className='rounded-xl'
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>
            <div className='flex flex-col xl:justify-center xl:pr-[120px] text-center xl:text-start xl:basis-1/2 text-black'>
                <h1 className='font-bold text-[1.75rem] md:text-[2.5rem] leading-[2.375rem] md:leading-[2.75rem] tracking-[1px] md:tracking-[1.42857px] uppercase mb-8'>Bringing you the <span className='text-custom-orange'>best</span> audio gear</h1>
                <p className='font-medium text-[0.938rem] leading-[1.563rem] opacity-50'>Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
                    rooms available for you to browse and experience a wide range of our products. Stop by our store
                    to meet some of the fantastic people who make Audiophile the best place to buy your portable audio
                    equipment.
                </p>
            </div>
        </div>
    )
}

export default About