"use client"
import React from 'react'

type Props = {
    amount: number;
    setAmount: React.Dispatch<React.SetStateAction<number>>;
}

const ProductAmount = ({ amount, setAmount }: Props) => {

    const decreaseAmount = () => {
        if (amount > 0) {
            setAmount((prev) => prev - 1)
        }
        else {
            setAmount(0)
        }
    }

    const increaseAmount = () => {
        setAmount((prev) => prev + 1)
    }

    return (
        <div className='flex items-center bg-custom-grey p-[15px] gap-5'>
            <button onClick={decreaseAmount} className='font-bold text-[0.813rem] leading-[1.125rem] tracking-[1px] uppercase opacity-25 text-black hover:opacity-100 hover:text-custom-orange transition duration-200'>-</button>

            <span className='font-bold text-black text-[0.813rem] leading-[1.125rem] tracking-[1px] uppercase'>{amount}</span>

            <button onClick={increaseAmount} className='font-bold text-[0.813rem] leading-[1.125rem] tracking-[1px] uppercase opacity-25 text-black hover:opacity-100 hover:text-custom-orange transition duration-200'>+</button>
        </div>
    )
}

export default ProductAmount