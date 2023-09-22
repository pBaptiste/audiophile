"use client"
import React, { useRef, useEffect, useContext } from 'react'
import { DataContext } from '../context/data-provider'
import BtnLink from './btn-link'
import Image from 'next/image'

type Props = {
    grandTotal: number;
    setIsConfirmationOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckoutConfirmation = ({ grandTotal, setIsConfirmationOpen }: Props) => {
    const { cartList } = useContext(DataContext)

    const checkoutRef = useRef<HTMLDivElement | null>(null)

    const handleClickOutside = (event: MouseEvent) => {
        if (checkoutRef.current && !checkoutRef.current.contains(event.target as Node)) {
            setIsConfirmationOpen(false)
        }
    }

    useEffect(() => {

        // Add the 'disable-scroll' class to the body element
        document.body.classList.add('disable-scroll');

        document.addEventListener('click', handleClickOutside)

        return () => {
            document.body.classList.remove('disable-scroll');
            document.removeEventListener('click', handleClickOutside)
        }

    })
    return (
        <div className='fixed z-40 bg-black bg-opacity-50 flex items-center justify-center top-0 left-0 w-full h-screen overflow-hidden'>
            <div
                className='flex flex-col w-[327px] md:w-[540px] max-h-[713px] bg-white rounded-lg px-8 py-8'
                ref={checkoutRef}>
                <div className='mb-[23px] md:mb-[33px]'>
                    <Image src='/assets/checkout/icon-order-confirmation.svg' alt='Confirmation Icon' width={64} height={64} />
                </div>

                <h1 className='mb-4 md:mb-6 text-2xl md:text-[2rem] leading-7 md:leading-9 font-bold tracking-[0.857px] md:tracking-[1.143px] uppercase'>THANK YOU <br /> FOR YOUR ORDER</h1>

                <p className='mb-6 md:mb-[33px] text-[.938rem] leading-[1.563rem] opacity-50 font-medium'>You will receive an email confirmation shortly.</p>

                <div className='mb-6 md:mb-[46px] rounded-lg flex flex-col md:flex-row'>

                    <div className='bg-custom-grey  px-6 py-6 rounded-t-lg md:rounded-l-lg md:rounded-tr-none md:flex-1'>
                        <div className='flex justify-between  border-b border-black border-opacity-[.08] pb-3 mb-3'>
                            <div className='flex gap-[27px]'>
                                <div className='flex-none w-[28px] h-[32px] relative' >
                                    <Image src={cartList[0]?.image} alt='headphones' fill className='object-cover' />
                                </div>
                                <div>
                                    <p className='font-bold text-[.938rem] leading-[1.563rem]'>{cartList[0]?.name}</p>
                                    <p className='font-bold text-sm leading-[1.563rem] opacity-50'>${(cartList[0]?.price).toLocaleString()}</p>
                                </div>
                            </div>
                            <p className='font-bold text-[.938rem] leading-[1.563rem] opacity-50'>x{cartList[0]?.quantity}</p>
                        </div>
                        <p className='text-xs font-bold tracking-[-0.214px] opacity-50 text-center'>{cartList.length > 0 && `and ${cartList.length - 1} other item(s)`}</p>
                    </div>

                    <div className='flex flex-col md:justify-end px-6 pt-[15px] pb-[19px] bg-black rounded-b-lg md:rounded-l-none md:rounded-r-lg text-white md:flex-1'>
                        <p className='text-[.938rem] font-medium leading-[1.563rem] opacity-50 mb-2'>GRAND TOTAL</p>
                        <p className='text-[1.125rem] leading-[1.563rem] font-bold'>${grandTotal.toLocaleString()}</p>
                    </div>

                </div>

                <BtnLink className='w-full text-center bg-custom-orange hover:bg-custom-light-orange text-white' link='/' name='Back To Home' />
            </div>
        </div>
    )
}

export default CheckoutConfirmation