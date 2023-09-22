import React from 'react'
import ResponsiveImage from './responsive-image'
import BtnLink from './btn-link'

type Props = {
    index: number
    newProduct: boolean;
    title: string;
    desc: string;
    link: string;
    images: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
}

const ProductInfo = ({ index, newProduct, title, desc, link, images }: Props) => {
    return (
        <div className='w-full flex flex-col xl:flex-row items-center xl:items-center xl:justify-between gap-8 md:gap-[52px]'>
            <div className={`relative w-[327px] md:w-[689px] xl:w-[540px] h-[352px] md:h-[502px] xl:h-[560px] ${index % 2 !== 0 && 'xl:order-2'}`}>
                <ResponsiveImage
                    sm={images.mobile}
                    md={images.tablet}
                    lg={images.desktop}
                    alt='product image'
                    className='rounded-xl'
                />
            </div>
            <div className={`flex flex-col items-center xl:items-start text-center xl:text-start max-w-[327px] md:max-w-[572px] xl:max-w-[445px] ${index % 2 === 0 && 'xl:order-1'}`}>
                {newProduct && <h2 className="text-normal text-custom-orange text-[0.875rem] leading-[1.188rem] tracking-[10px] mb-6 md:mb-4">NEW PRODUCT</h2>}
                <h4 className='font-bold text-[1.75rem] md:text-[2.5rem] leading-[2.375rem] md:leading-[2.75rem] tracking-[1px] md:tracking-[1.42857px] uppercase md:px-10 xl:px-0 mb-6 md:mb-8'>{title}</h4>
                <p className='font-medium text-[0.938rem] leading-[1.563rem] opacity-50 mb-6 md:mb-8'>{desc}</p>
                <BtnLink className='text-white bg-custom-orange hover:bg-custom-light-orange' name='See product' link={link} />
            </div>
        </div>
    )
}

export default ProductInfo