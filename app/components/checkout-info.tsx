"use client"
import React, { useState } from 'react'
import Image from 'next/image'

type Props = {
    name: string;
    email: string;
    isValidEmail: boolean;
    phone: string;
    isValidPhone: boolean;
    address: string;
    zipCode: string;
    city: string;
    country: string;
    eMoney: string;
    ePin: string;
    isEMoney: boolean;
    isCash: boolean;
    isEmpty: boolean;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPhone: React.Dispatch<React.SetStateAction<string>>;
    setAddress: React.Dispatch<React.SetStateAction<string>>;
    setZipCode: React.Dispatch<React.SetStateAction<string>>;
    setCity: React.Dispatch<React.SetStateAction<string>>;
    setCountry: React.Dispatch<React.SetStateAction<string>>;
    setEMoney: React.Dispatch<React.SetStateAction<string>>;
    setEPin: React.Dispatch<React.SetStateAction<string>>;
    setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
    setIsEMoney: React.Dispatch<React.SetStateAction<boolean>>;
    setIsCash: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckoutInfo = ({
    name,
    email,
    isValidEmail,
    phone,
    isValidPhone,
    address,
    zipCode,
    city,
    country,
    eMoney,
    ePin,
    isEMoney,
    isCash,
    isEmpty,
    setName,
    setEmail,
    setPhone,
    setAddress,
    setZipCode,
    setCity,
    setCountry,
    setEMoney,
    setEPin,
    setIsEMoney,
    setIsCash,
    setPaymentMethod,
}: Props) => {

    const handleEMoney = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentMethod(event.target.value)
        setIsCash(false)
        setIsEMoney(true)
    }

    const handleCash = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentMethod(event.target.value)
        setIsEMoney(false)
        setIsCash(true)
    }

    return (
        <div
            className='xl:flex-1 xl:basis-[730px] bg-white rounded-xl pt-6 md:pt-[27px] xl:pt-[54px] px-6 md:px-[30px] xl:px-12 pb-[31px] xl:pb-12 text-black'>

            <h1 className='font-bold text-[1.75rem] md:text-[2rem] leading-[2.375rem] md:leading-9 tracking-[1px] md:tracking-[1.14286px] uppercase mb-8 md:mb-10'>Checkout</h1>

            <div className='flex flex-col mb-8'>
                <h2 className='font-bold text-custom-orange text-[0.813rem] leading-[1.563rem] tracking-[0.928571px] uppercase mb-4'>Billing details</h2>
                <div className='flex flex-col md:flex-row md:flex-wrap gap-6'>

                    <div className='flex flex-col md:basis-1/2'>
                        <div className='mb-[9px] flex justify-between'>
                            <label className={`${isEmpty && !name.trim() ? 'text-custom-red' : 'text-black'} font-bold text-xs leading-4 tracking-[-0.214286px]`} htmlFor="name">Name</label>
                            {isEmpty && !name.trim() && <p className='font-medium text-custom-red text-xs leading-4 tracking-[-0.214286px]'>This field is required</p>}
                        </div>
                        <input
                            className={`${isEmpty && !email.trim() ? 'border-2 border-custom-red  outline-none' : 'border border-[#CFCFCF] outline-custom-orange'} caret-custom-orange rounded-xl pt-[18px] pl-6 pb-[18px] font-bold text-sm leading-[1.188rem] tracking-[-0.25px]`}
                            placeholder='Alexei Ward' type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className='flex flex-col flex-1'>
                        <div className='mb-[9px] flex justify-between'>
                            <label className={`${(isEmpty && !email.trim()) || !isValidEmail ? 'text-custom-red' : 'text-black'} font-bold text-xs leading-4 tracking-[-0.214286px]`} htmlFor="email">Email Address</label>
                            {isEmpty && !email.trim() && <p className='font-medium text-custom-red text-xs leading-4 tracking-[-0.214286px]'>This field is required</p>}
                            {!isValidEmail && <p className='font-medium text-custom-red text-xs leading-4 tracking-[-0.214286px]'>Wrong Format</p>}
                        </div>
                        <input
                            className={`${(isEmpty && !email.trim()) || !isValidEmail ? 'border-2 border-custom-red  outline-none' : 'border border-[#CFCFCF] outline-custom-orange'} caret-custom-orange rounded-xl pt-[18px] pl-6 pb-[18px] font-bold text-sm leading-[1.188rem] tracking-[-0.25px]`}
                            placeholder='alexei@mail.com' type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='flex flex-col md:basis-1/2'>
                        <div className='mb-[9px] flex justify-between'>
                            <label className={`${(isEmpty && !phone.trim()) || !isValidPhone ? 'text-custom-red' : 'text-black'} font-bold text-xs leading-4 tracking-[-0.214286px]`} htmlFor="phone">Phone Number</label>
                            {isEmpty && !phone.trim() && <p className='font-medium text-custom-red text-xs leading-4 tracking-[-0.214286px]'>This field is required</p>}
                            {!isValidPhone && <p className='font-medium text-custom-red text-xs leading-4 tracking-[-0.214286px]'>Wrong Format</p>}
                        </div>
                        <input
                            className={`${(isEmpty && !phone.trim()) || !isValidPhone ? 'border-2 border-custom-red  outline-none' : 'border border-[#CFCFCF] outline-custom-orange'} caret-custom-orange rounded-xl pt-[18px] pl-6 pb-[18px] font-bold text-sm leading-[1.188rem] tracking-[-0.25px]`}
                            placeholder='+1 202-555-0136'
                            type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>
            </div>

            <div className='mb-8'>
                <h2 className='font-bold text-custom-orange text-[0.813rem] leading-[1.563rem] tracking-[0.928571px] uppercase mb-4'>Shipping Info</h2>
                <div className='flex flex-col md:flex-row md:flex-wrap gap-6'>
                    <div className='flex flex-col md:basis-full'>
                        <div className='mb-[9px] flex justify-between'>
                            <label className={`${isEmpty && !address.trim() ? 'text-custom-red' : 'text-black'} font-bold text-xs leading-4 tracking-[-0.214286px]`} htmlFor="address">Address</label>
                            {isEmpty && !address.trim() && <p className='font-medium text-custom-red text-xs leading-4 tracking-[-0.214286px]'>This field is required</p>}
                        </div>
                        <input
                            className={`${isEmpty && !address.trim() ? 'border-2 border-custom-red  outline-none' : 'border border-[#CFCFCF] outline-custom-orange'} caret-custom-orange rounded-xl pt-[18px] pl-6 pb-[18px] font-bold text-sm leading-[1.188rem] tracking-[-0.25px]`}
                            placeholder='1137 Williams Avenue'
                            type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>

                    <div className='flex flex-col md:basis-1/2'>
                        <div className='mb-[9px] flex justify-between'>
                            <label className={`${isEmpty && !zipCode.trim() ? 'text-custom-red' : 'text-black'} font-bold text-xs leading-4 tracking-[-0.214286px]`} htmlFor="zip">Zip Code</label>
                            {isEmpty && !zipCode.trim() && <p className='font-medium text-custom-red text-xs leading-4 tracking-[-0.214286px]'>This field is required</p>}
                        </div>
                        <input
                            className={`${isEmpty && !zipCode.trim() ? 'border-2 border-custom-red  outline-none' : 'border border-[#CFCFCF] outline-custom-orange'} caret-custom-orange rounded-xl pt-[18px] pl-6 pb-[18px] font-bold text-sm leading-[1.188rem] tracking-[-0.25px]`}
                            placeholder='10001'
                            type="text" name="zip" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                    </div>

                    <div className='flex flex-col md:flex-1'>
                        <div className='mb-[9px] flex justify-between'>
                            <label className={`${isEmpty && !city.trim() ? 'text-custom-red' : 'text-black'} font-bold text-xs leading-4 tracking-[-0.214286px]`} htmlFor="city">City</label>
                            {isEmpty && !city.trim() && <p className='font-medium text-custom-red text-xs leading-4 tracking-[-0.214286px]'>This field is required</p>}
                        </div>
                        <input
                            className={`${isEmpty && !city.trim() ? 'border-2 border-custom-red  outline-none' : 'border border-[#CFCFCF] outline-custom-orange'} caret-custom-orange rounded-xl pt-[18px] pl-6 pb-[18px] font-bold text-sm leading-[1.188rem] tracking-[-0.25px]`}
                            placeholder='New York'
                            type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>

                    <div className='flex flex-col md:basis-1/2'>
                        <div className='mb-[9px] flex justify-between'>
                            <label className={`${isEmpty && !country.trim() ? 'text-custom-red' : 'text-black'} font-bold text-xs leading-4 tracking-[-0.214286px]`} htmlFor="country">Country</label>
                            {isEmpty && !country.trim() && <p className='font-medium text-custom-red text-xs leading-4 tracking-[-0.214286px]'>This field is required</p>}
                        </div>
                        <input
                            className={`${isEmpty && !country.trim() ? 'border-2 border-custom-red  outline-none' : 'border border-[#CFCFCF] outline-custom-orange'} caret-custom-orange rounded-xl pt-[18px] pl-6 pb-[18px] font-bold text-sm leading-[1.188rem] tracking-[-0.25px]`}
                            placeholder='United States'
                            type="text" name="country" value={country} onChange={(e) => setCountry(e.target.value)} />
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
                                        onChange={handleEMoney}
                                        className='appearance-none border border-[#CFCFCF] w-[20px] h-[20px] rounded-full'
                                        type='radio' name="payment" id="" value="E-Money" />
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
                                        onChange={handleCash}
                                        className='appearance-none border border-[#CFCFCF] w-[20px] h-[20px] rounded-full'
                                        type='radio' name="payment" id="" value="Cash" />
                                    {isCash &&
                                        <span className='w-[10px] h-[10px] bg-custom-orange rounded-full absolute top-[5px] left-1/2 translate-x-[-50%] pointer-events-none'></span>
                                    }
                                </div>
                                <label className='font-bold text-sm leadung-[1.188rem] tracking-[-0.25px]' htmlFor="e-Money">Cash on Delivery</label>
                            </div>
                        </div>
                    </div>

                    {isEMoney &&
                        <div className='flex flex-col md:flex-row gap-6'>
                            <div className='flex flex-col md:flex-1'>
                                <div className='mb-[9px] flex justify-between'>
                                    <label className={`${isEmpty && !eMoney.trim() ? 'text-custom-red' : 'text-black'} font-bold text-xs leading-4 tracking-[-0.214286px]`} htmlFor="e-MoneyNumber">e-Money Number</label>
                                    {isEmpty && !eMoney.trim() && <p className='font-medium text-custom-red text-xs leading-4 tracking-[-0.214286px]'>This field is required</p>}
                                </div>
                                <input
                                    className={`${isEmpty && !eMoney.trim() ? 'border-2 border-custom-red  outline-none' : 'border border-[#CFCFCF] outline-custom-orange'} caret-custom-orange rounded-xl pt-[18px] pl-6 pb-[18px] font-bold text-sm leading-[1.188rem] tracking-[-0.25px]`}
                                    placeholder='238521993' type="text" name="e-MoneyNumber" value={eMoney} onChange={(e) => setEMoney(e.target.value)} />
                            </div>

                            <div className='flex flex-col md:flex-1'>
                                <div className='mb-[9px] flex justify-between'>
                                    <label className={`${isEmpty && !ePin.trim() ? 'text-custom-red' : 'text-black'} font-bold text-xs leading-4 tracking-[-0.214286px]`} htmlFor="e-MoneyPin">e-Money Pin</label>
                                    {isEmpty && !ePin.trim() && <p className='font-medium text-custom-red text-xs leading-4 tracking-[-0.214286px]'>This field is required</p>}
                                </div>
                                <input
                                    className={`${isEmpty && !ePin.trim() ? 'border-2 border-custom-red  outline-none' : 'border border-[#CFCFCF] outline-custom-orange'} caret-custom-orange rounded-xl pt-[18px] pl-6 pb-[18px] font-bold text-sm leading-[1.188rem] tracking-[-0.25px]`}
                                    placeholder='6891' type="text" name="e-MoneyPin" value={ePin} onChange={(e) => setEPin(e.target.value)} />
                            </div>
                        </div>}

                    <div className='hidden xl:flex gap-8 items-center mt-[30px]'>
                        <Image src="/assets/checkout/icon-cash-on-delivery.svg" alt='cash-on-delivery icon' width={48} height={48} />
                        <p className='text-[.938rem] font-medium leading-[1.563rem] opacity-50'>
                            The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                        </p>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default CheckoutInfo