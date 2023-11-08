import React from 'react'
import Image from 'next/image'

type Props = {
    image: string;
    name: string;
    price: number;
    quantity: number;
}

const CheckoutItem = ({ image, name, price, quantity }: Props) => {
    return (
        <div className='flex justify-between'>
            <div className='flex gap-[27px]'>
                <div className='flex-none w-[28px] h-[32px] relative' >
                    <Image src={image} alt={name} fill className='object-cover' />
                </div>

                <div>
                    <p className='font-bold text-[.938rem] leading-[1.563rem]'>{name}</p>
                    <p className='font-bold text-sm leading-[1.563rem] opacity-50'>${(price).toLocaleString()}</p>
                </div>
            </div>
            <p className='font-bold text-[.938rem] leading-[1.563rem] opacity-50'>x{quantity}</p>
        </div>
    )
}

export default CheckoutItem