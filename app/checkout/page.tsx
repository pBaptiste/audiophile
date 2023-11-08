"use client"
import React, { useState, useEffect, useContext } from 'react'
import { DataContext } from '../context/data-provider'
import CheckoutInfo from '../components/checkout-info'
import CartSummary from '../components/cart-summary'
import CheckoutConfirmation from '../components/checkout-confirmation'
import { useRouter } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'

const Checkout = () => {
    const { cartList } = useContext(DataContext)
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [phone, setPhone] = useState('')
    const [isValidPhone, setIsValidPhone] = useState(true)
    const [address, setAddress] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [eMoney, setEMoney] = useState('')
    const [ePin, setEPin] = useState('')
    const [isEMoney, setIsEMoney] = useState(true)
    const [isCash, setIsCash] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState('E-Money')
    const [isEmpty, setIsEmpty] = useState(false)
    const [grandTotal, setGrandTotal] = useState(0)
    const router = useRouter()
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneNumberRegex = /^(\+\d{1,3}\s?)?(\d{1,4}[-\s]?){1,4}\d{1,4}$/;

    const handleBack = () => {
        router.back()
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let hasError = false

        if (!name.trim() || !email.trim() || !phone.trim() || !address.trim() || !zipCode.trim() || !city.trim() || !country.trim()) {
            setIsEmpty(true)
            hasError = true
        }
        if (email.trim() && !emailRegex.test(email)) {
            setIsValidEmail(false)
            hasError = true
        }
        if (phone.trim() && !phoneNumberRegex.test(phone)) {
            setIsValidPhone(false)
            hasError = true
        }

        if (!hasError) {
            setIsConfirmationOpen(true)
        }
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
                <form onSubmit={handleSubmit} className='flex flex-col xl:flex-row gap-8 xl:max-h-[1126px]'>
                    <CheckoutInfo
                        name={name} setName={setName}
                        email={email} setEmail={setEmail}
                        phone={phone} setPhone={setPhone}
                        address={address} setAddress={setAddress}
                        zipCode={zipCode} setZipCode={setZipCode}
                        city={city} setCity={setCity}
                        country={country} setCountry={setCountry}
                        eMoney={eMoney} setEMoney={setEMoney}
                        ePin={ePin} setEPin={setEPin}
                        isEMoney={isEMoney} setIsEMoney={setIsEMoney}
                        isCash={isCash} setIsCash={setIsCash}
                        setPaymentMethod={setPaymentMethod}
                        isEmpty={isEmpty}
                        isValidEmail={isValidEmail}
                        isValidPhone={isValidPhone}
                    />
                    <CartSummary grandTotal={grandTotal} setGrandTotal={setGrandTotal} />
                </form>
            </div>
            <AnimatePresence>
                {isConfirmationOpen && <CheckoutConfirmation setIsConfirmationOpen={setIsConfirmationOpen} grandTotal={grandTotal} />}
            </AnimatePresence>

        </main>
    )
}

export default Checkout