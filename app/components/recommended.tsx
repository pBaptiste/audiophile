import React from 'react'
import BtnLink from './btn-link'
import ResponsiveImage from './responsive-image'

type Props = {
    image: {
        mobile: string;
        tablet: string;
        desktop: string;
    };

    name: string;
    slug: string;
}

const Recommended = ({ image, name, slug }: Props) => {
    return (
        <div className='flex flex-col gap-8 md:gap-10 items-center'>
            <div className='relative w-[327px] h-[120px] md:w-[223px] md:h-[318px] xl:w-[350px] xl:h-[318px]'>
                <ResponsiveImage
                    sm={image.mobile}
                    md={image.tablet}
                    lg={image.desktop}
                    alt='recommended product image'
                />
            </div>
            <h4 className='font-bold text-center text-2xl leading-[2.063rem] tracking-[ 1.71429px] uppercase text-black'>{name}</h4>

            <BtnLink className='text-white bg-custom-orange hover:bg-custom-light-orange' link={`/productdetail/${slug}`} name='See Product' />
        </div>
    )
}

export default Recommended