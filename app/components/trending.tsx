import React from 'react'
import BtnLink from './btn-link'
import ResponsiveImage from './responsive-image'
import Image from 'next/image'


const Trending = () => {
    return (
        <div className='grid gap-6 w-full md:grid-cols-2'>
            <div className='md:col-span-2 overflow-hidden relative bg-custom-orange rounded-lg text-white text-center flex justify-center xl:justify-end px-6 xl:px-[95px] pt-[293px] md:pt-[353px] xl:pt-[133px] pb-[55px] md:pb-16 xl:pb-[124px] w-full'>
                <div className='absolute z-20 top-10 md:top-[52px] xl:top-[59px] left-[50%] translate-x-[-50%] xl:left-[77px] xl:translate-x-0 w-[172px] md:w-[197px] xl:w-[410.23px] h-[207px] md:h-[237px] xl:h-[493px]'>
                    <ResponsiveImage
                        sm='/assets/home/mobile/image-speaker-zx9.png'
                        md='/assets/home/tablet/image-speaker-zx9.png'
                        lg='/assets/home/desktop/image-speaker-zx9.png'
                        alt='speaker image' />
                </div>

                <div className='absolute w-[558px] md:w-[944px] h-[558px] md:h-[944px] top-[-120px] md:top-[-305px] xl:top-[-50px] left-[50%] translate-x-[-50%] xl:left-[-135px] xl:translate-x-0 z-10'>
                    <Image src='/assets/home/desktop/pattern-circles.svg'
                        alt='circle patterns'
                        fill
                    />
                </div>

                <div className='flex flex-col items-center xl:items-start text-center xl:text-start'>
                    <h4 className='font-bold text-4xl md:text-[3.5rem] leading-10 md:leading-[3.625rem] tracking-[1.28571px] uppercase mb-6 px-4 md:px-0 md:w-[261px]'>ZX9 SPEAKER</h4>
                    <p className='font-medium text-[0.938rem] leading-[1.563rem] opacity-75 mb-6 max-w-[280px] md:max-w-[349px]'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <BtnLink className='relative z-20 bg-black hover:bg-[#4C4C4C]' name='See Product' link='/productdetail/zx9-speaker' />
                </div>
            </div>

            <div className='md:col-span-2 relative py-[101px] px-6 md:px-[62px] rounded-lg bg-custom-light-grey bg-zx7Mobile bg-center md:bg-zx7Tablet xl:bg-zx7Desktop bg-no-repeat bg-cover'>
                <h4 className='font-bold text-[1.75rem] leading-[2.375rem] tracking-[2px] uppercase text-black mb-8'>ZX7 SPEAKER</h4>
                <BtnLink className='border border-black text-black hover:bg-black hover:text-white' name='See Product' link='/productdetail/zx7-speaker' />
            </div>

            <div className='h-[200px] md:h-[320px] w-full rounded-lg md:col-span-1 bg-earphonesMobile md:bg-earphonesTablet xl:bg-earphonesDesktop bg-center bg-no-repeat bg-cover'>
            </div>

            <div className="md:col-span-1 md:h-[320px] bg-custom-grey py-[41px] md:py-[101px] px-6 md:px-[41px] rounded-lg">
                <h4 className='font-bold text-[1.75rem] leading-[2.375rem] tracking-[2px] uppercase text-black mb-8'>YX1 EARPHONES</h4>
                <BtnLink className='border border-black text-black hover:bg-black hover:text-white' name='See Product' link='/productdetail/yx1-earphones' />
            </div>

        </div>
    )
}

export default Trending