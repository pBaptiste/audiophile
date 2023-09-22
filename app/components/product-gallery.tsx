import React from 'react'
import ResponsiveImage from './responsive-image'

type Props = {
    first: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    second: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    third: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
}

const ProductGallery = ({ first, second, third }: Props) => {
    return (
        <div className='flex flex-col md:flex-row gap-5 md:gap-[18px] xl:gap-[30px] items-center md:justify-center'>
            <div className='flex flex-col gap-5 xl:gap-8'>
                <div className={'relative rounded-lg w-[327px] h-[174px] md:w-[277px] xl:w-[445px] xl:h-[280px]'}>
                    <ResponsiveImage
                        className='rounded-lg'
                        sm={first.mobile}
                        md={first.tablet}
                        lg={first.desktop}
                        alt='first gallery image'
                    />
                </div>
                <div className='relative w-[327px] h-[174px] md:w-[277px] xl:w-[445px] xl:h-[280px]'>
                    <ResponsiveImage
                        className='rounded-lg'
                        sm={second.mobile}
                        md={second.tablet}
                        lg={second.desktop}
                        alt='second gallery image'
                    />
                </div>
            </div>

            <div className='relative w-[327px] h-[368px] md:w-[395px] xl:w-[635px] xl:h-[592px]'>
                <ResponsiveImage
                    className='rounded-lg'
                    sm={third.mobile}
                    md={third.tablet}
                    lg={third.desktop}
                    alt='third gallery image'
                />
            </div>
        </div>
    )
}

export default ProductGallery