import React from 'react'
import Image from 'next/image'

type Props = {
    image: string;
    name: string;
    price: number;
    amount: number;
}

const SummaryItem = ({ image, name, price, amount }: Props) => {
    return (
        <div className='flex items-center gap-4'>
            <Image
                src={image}
                alt='cart image'
                width={64}
                height={64}
                className='rounded-lg'
            />
            <div className='flex justify-between flex-1'>
                <div>
                    <h4 className='font-bold text-black text-[0.938rem] leading-[1.563rem] uppercase'>{name}</h4>
                    <p className='font-bold text-black text-opacity-50 text-sm leading-[1.563rem]'>${price.toLocaleString()}</p>
                </div>

                <span className='font-bold text-[0.938rem] leading-[1.563rem] opacity-50'>X{amount}</span>
            </div>



        </div>
    )
}

export default SummaryItem