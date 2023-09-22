"use client"
import React, { useState, useEffect, useContext } from 'react'
import { DataContext } from '../context/data-provider'
import CheckoutInfo from '../components/checkout-info'
import CartSummary from '../components/cart-summary'
import CheckoutConfirmation from '../components/checkout-confirmation'
import { useRouter } from 'next/navigation'

const Checkout = () => {
    const { cartList } = useContext(DataContext)
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
    const [grandTotal, setGrandTotal] = useState(0)
    const router = useRouter()

    const handleBack = () => {
        router.back()
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsConfirmationOpen(true)
    }

    useEffect(() => {
        console.log("Summary Log", cartList);
    }, [cartList]);

    return (
        <main className="bg-[#FAFAFA] pt-4 md:pt-12 xl:pt-[79px] pb-[97px] md:pb-[116px] xl:pb-[141px] px-6 md:px-10 xl:px-[165px] flex flex-col items-center ">
            <div className='flex flex-col w-[327px] md:w-[689px] xl:w-[1110px]'>
                <div className='mb-6 xl:mb-[38px]'>
                    <button onClick={handleBack} className='font-medium text-[0.938rem] leading-[1.563rem] text-black text-opacity-50'>Go Back</button>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col xl:flex-row gap-8'>
                    <CheckoutInfo />
                    <CartSummary grandTotal={grandTotal} setGrandTotal={setGrandTotal} />
                </form>
            </div>

            {isConfirmationOpen && <CheckoutConfirmation setIsConfirmationOpen={setIsConfirmationOpen} grandTotal={grandTotal} />}
        </main>
    )
}

export default Checkout