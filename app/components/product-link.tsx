import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    imgSrc: string;
    imgAlt: string;
    imgWidth: number;
    imgHeight: number;
    productName: string;
    productLink: string;
}

const ProductLink = ({ imgSrc, imgAlt, imgWidth, imgHeight, productName, productLink }: Props) => {
    return (
        <div className='relative bg-custom-grey flex flex-col gap-[17px] items-center pt-[88px] pb-[22px] rounded-lg'>
            <div className='absolute top-[-52px]'>
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    width={imgWidth}
                    height={imgHeight} />
            </div>

            <h1 className='font-bold text-black text-[0.938rem] leading-5 tracking-[1.07143px] text-center uppercase'>{productName}</h1>
            <Link href={productLink} className='flex gap-[13.32px] items-center font-bold text-[0.813rem] leading-[1.125rem] tracking-[1px] uppercase text-black text-opacity-50 hover:text-custom-orange transition duration-200'>
                Shop
                <div>
                    <Image
                        src='/assets/shared/desktop/icon-arrow-right.svg'
                        alt='right arrow icon'
                        width={8}
                        height={12} />
                </div>

            </Link>
        </div>
    )
}

export default ProductLink