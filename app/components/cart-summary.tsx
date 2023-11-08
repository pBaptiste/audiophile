"use client"
import React, { useEffect, useContext } from 'react'
import { DataContext } from '../context/data-provider'
import BtnCustom from './btn-custom'
import SummaryItem from './summary-item'

type Props = {
    grandTotal: number;
    setGrandTotal: React.Dispatch<React.SetStateAction<number>>;
}

const CartSummary = ({ grandTotal, setGrandTotal }: Props) => {
    const { cartList, totalCost } = useContext(DataContext)
    let shipping = 50
    let vat = 1079

    useEffect(() => {
        setGrandTotal(totalCost + shipping)
    })

    return (
        <div className='xl:flex-1 xl:basis-[350px] xl:h-fit bg-white rounded-lg flex flex-col gap-8 pt-6 md:pt-[27px] lg:pt-[54px] px-6 pr-7 md:px-[30px] xl:px-12 pb-[31px] xl:pb-12 text-black xl:max-h-[1126px] overflow-scroll'>
            <h1 className='font-bold text-[1.125rem] leading-[1.563rem] tracking-[1.28571px] uppercase'>Summary</h1>

            <div className='flex flex-col gap-6'>

                {cartList.map(item => (
                    <SummaryItem key={item.id} image={item.image} name={item.name} price={item.price} amount={item.quantity} />
                ))}
            </div>

            <div className='flex flex-col gap-2'>

                <div className='flex justify-between'>
                    <h2 className='font-medium text-[0.938rem] leading-[1.563rem] uppercase opacity-50'>Total</h2>
                    <span className='font-bold text-[1.125rem] leading-[1.563rem] uppercase'>$ {totalCost.toLocaleString()}</span>
                </div>

                <div className='flex justify-between'>
                    <h2 className='font-medium text-[0.938rem] leading-[1.563rem] uppercase opacity-50'>Shipping</h2>
                    <span className='font-bold text-[1.125rem] leading-[1.563rem] uppercase'>$ {totalCost === 0 ? 0 : shipping.toLocaleString()}</span>
                </div>

                <div className='flex justify-between'>
                    <h2 className='font-medium text-[0.938rem] leading-[1.563rem] uppercase opacity-50'>VAT (INCLUDED)</h2>
                    <span className='font-bold text-[1.125rem] leading-[1.563rem] uppercase'>$ {totalCost === 0 ? 0 : vat.toLocaleString()}</span>
                </div>

                <div className='flex justify-between mt-4'>
                    <h2 className='font-medium text-[0.938rem] leading-[1.563rem] uppercase opacity-50'>Grand Total</h2>
                    <span className='font-bold text-[1.125rem] leading-[1.563rem] uppercase text-custom-orange'>$ {totalCost === 0 ? 0 : grandTotal.toLocaleString()}</span>
                </div>
            </div>

            <BtnCustom type='submit' name='Continue & Pay' disabled={totalCost == 0 ? true : false} />

        </div>
    )
}

export default CartSummary