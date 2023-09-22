"use client"
import React, { useState } from 'react'

const CheckoutInfo = () => {
    const [isEMoney, setIsEMoney] = useState(false)
    const [isCash, setIsCash] = useState(false)

    const handleEMoney = () => {
        setIsEMoney(prev => !prev)
    }

    const handleCash = () => {
        setIsCash(prev => !prev)
    }

    return (
        <div
            className='xl:flex-1 xl:basis-[730px] bg-white rounded-xl pt-6 md:pt-[27px] xl:pt-[54px] px-6 md:px-[30px] xl:px-12 pb-[31px] xl:pb-12 text-black'>

            <h1 className='font-bold text-[1.75rem] md:text-[2rem] leading-[2.375rem] md:leading-9 tracking-[1px] md:tracking-[1.14286px] uppercase mb-8 md:mb-10'>Checkout</h1>

            <div className='flex flex-col mb-8'>
                <h2 className='font-bold text-custom-orange text-[0.813rem] leading-[1.563rem] tracking-[0.928571px] uppercase mb-4'>Billing details</h2>
                <div className='flex flex-col md:flex-row md:flex-wrap gap-6'>

                    <div className='flex flex-col md:basis-1/2'>
                        <label className='font-bold text-xs leading-4 tracking-[-0.214286px] mb-[9px]' htmlFor="name">Name</label>
                        <input
                            className='border border-[#CFCFCF] outline-custom-orange rounded-xl pt-[18px] pl-6 pb-[18px] font-bold text-sm leading-[1.188rem] tracking-[-0.25px]'
                            placeholder='Alexei Ward' type="text" name="name" id="" />
                    </div>

                    <div className='flex flex-col flex-1'>
                        <label className='font-bold text-xs leading-4 tracking-[-0.214286px] mb-[9px]' htmlFor="email">Email Address</label>
                        <input
                            className='border border-[#CFCFCF] outline-custom-orange rounded-xl pt-[18px] pl-6 pb-[18px] font-bold text-sm leading-[1.188rem] tracking-[-0.25px]'
                            placeholder='alexei@mail.com' type="text" name="email" id="" />
                    </div>

                    <div className='flex flex-col md:basis-1/2'>
                        <label className='font-bold text-xs leading-4 tracking-[-0.214286px] mb-[9px]' htmlFor="phone">Phone Number</label>
                        <input
                            className='border border-[#CFCFCF] outline-custom-orange rounded-xl pt-[18px] pl-6 pb-[18px] font-bold text-sm leading-[1.188rem] tracking-[-0.25px]'
                            placeholder='+1 202-555-0136'
                            type="text" name="phone" id="" />
                    </div>
                </div>
            </div>

            <div className='mb-8'>
                <h2 className='font-bold text-custom-orange text-[0.813rem] leading-[1.563rem] tracking-[0.928571px] uppercase mb-4'>Shipping Info</h2>
                <div className='flex flex-col md:flex-row md:flex-wrap gap-6'>
                    <div className='flex flex-col md:basis-full'>
                        <label className='font-bold text-xs leading-4 tracking-[-0.214286px] mb-[9px]' htmlFor="address">Address</label>
                        <input
                            className='border border-[#CFCFCF] outline-custom-orange rounded-xl pt-[18px] pl-6 pb-[18px] font-bold text-sm leading-[1.188rem] tracking-[-0.25px]'
                            placeholder='1137 Williams Avenue'
                            type="text" name="address" id="" />
                    </div>
                    <div className='flex flex-col md:basis-1/2'>
                        <label className='font-bold text-xs leading-4 tracking-[-0.214286px] mb-[9px]' htmlFor="zip">Zip Code</label>
                        <input
                            className='border border-[#CFCFCF] outline-custom-orange rounded-xl pt-[18px] pl-6 pb-[18px] font-bold text-sm leading-[1.188rem] tracking-[-0.25px]'
                            placeholder='10001'
                            type="text" name="zip" id="" />
                    </div>
                    <div className='flex flex-col md:flex-1'>
                        <label className='font-bold text-xs leading-4 tracking-[-0.214286px] mb-[9px]' htmlFor="phone">City</label>
                        <input
                            className='border border-[#CFCFCF] outline-custom-orange rounded-xl pt-[18px] pl-6 pb-[18px] font-bold text-sm leading-[1.188rem] tracking-[-0.25px]'
                            placeholder='New York'
                            type="text" name="city" id="" />
                    </div>
                    <div className='flex flex-col md:basis-1/2'>
                        <label className='font-bold text-xs leading-4 tracking-[-0.214286px] mb-[9px]' htmlFor="country">Country</label>
                        <input
                            className='border border-[#CFCFCF] outline-custom-orange rounded-xl pt-[18px] pl-6 pb-[18px] font-bold text-sm leading-[1.188rem] tracking-[-0.25px]'
                            placeholder='United States'
                            type="text" name="country" id="" />
                    </div>
                </div>
            </div>

            <div>
                <h2 className='font-bold text-custom-orange text-[0.813rem] leading-[1.563rem] tracking-[0.928571px] uppercase mb-4'>Payment Details</h2>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col md:flex-row gap-6'>
                        <label className='font-bold text-xs leading-4 tracking-[-0.214286px] md:flex-1'>Payment Method</label>
                        <div className='md:flex-1'>
                            <div className='flex items-center gap-4 border border-[#CFCFCF] rounded-xl pt-[18px] pl-6 pb-[18px] mb-6'>
                                <div className='relative flex items-center'>
                                    <input
                                        checked={isEMoney}
                                        onClick={handleEMoney}
                                        className='appearance-none border border-[#CFCFCF] w-[20px] h-[20px] rounded-full'
                                        type='radio' name="e-Money" id="" />
                                    {isEMoney &&
                                        <span className='w-[10px] h-[10px] bg-custom-orange rounded-full absolute top-[5px] left-1/2 translate-x-[-50%] pointer-events-none'></span>
                                    }
                                </div>
                                <label className='font-bold text-sm leadung-[1.188rem] tracking-[-0.25px]' htmlFor="e-Money">e-Money</label>
                            </div>

                            <div className='flex items-center gap-4 border border-[#CFCFCF] rounded-xl pt-[18px] pl-6 pb-[18px]'>
                                <div className='relative flex items-center'>
                                    <input
                                        checked={isCash}
                                        onClick={handleCash}
                                        className='appearance-none border border-[#CFCFCF] w-[20px] h-[20px] rounded-full'
                                        type='radio' name="e-Money" id="" />
                                    {isCash &&
                                        <span className='w-[10px] h-[10px] bg-custom-orange rounded-full absolute top-[5px] left-1/2 translate-x-[-50%] pointer-events-none'></span>
                                    }
                                </div>
                                <label className='font-bold text-sm leadung-[1.188rem] tracking-[-0.25px]' htmlFor="e-Money">Cash on Delivery</label>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-6'>
                        <div className='flex flex-col md:flex-1'>
                            <label className='font-bold text-xs leading-4 tracking-[-0.214286px] mb-[9px]' htmlFor="e-MoneyNumber">e-Money Number</label>
                            <input
                                className='border border-[#CFCFCF] outline-custom-orange rounded-xl pt-[18px] pl-6 pb-[18px] font-bold text-sm leading-[1.188rem] tracking-[-0.25px]'
                                placeholder='238521993' type="text" name="e-MoneyNumber" id="" />
                        </div>

                        <div className='flex flex-col md:flex-1'>
                            <label className='font-bold text-xs leading-4 tracking-[-0.214286px] mb-[9px]' htmlFor="e-MoneyPin">e-Money Pin</label>
                            <input
                                className='border border-[#CFCFCF] outline-custom-orange rounded-xl pt-[18px] pl-6 pb-[18px] font-bold text-sm leading-[1.188rem] tracking-[-0.25px]'
                                placeholder='6891' type="text" name="e-MoneyPin" id="" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CheckoutInfo