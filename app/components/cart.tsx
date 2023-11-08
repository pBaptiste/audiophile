"use client"
import React, { useRef, useEffect, useContext } from 'react'
import { DataContext } from '../context/data-provider'
import BtnLink from './btn-link'
import CartItem from './cart-item'
import { motion } from 'framer-motion'

type Props = {
    setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart = ({ setIsCartOpen }: Props) => {

    const { cartList, totalCost, setCartList, setTotalCost } = useContext(DataContext)

    // useEffect(() => {
    //     console.log("Cart Log: ", cartList);
    // }, [cartList]);

    const cartRef = useRef<HTMLDivElement | null>(null)


    const handleClickOutside = (event: MouseEvent) => {
        if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
            setIsCartOpen(false)
        }
    }

    const handleCheckOut = () => {
        setIsCartOpen(false)
    }

    const handleRemoveAll = () => {
        setCartList([])
        setTotalCost(0)
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
        <div className='absolute z-40 bg-black bg-opacity-50 flex items-center justify-center md:justify-end md:pr-10 top-0 left-0 w-full h-screen overflow-hidden'>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.25 }}
                exit={{ y: -100, opacity: 0 }}
                ref={cartRef} className='flex flex-col justify-between w-[327px] md:w-[377px] h-[488px] bg-white rounded-lg px-7 py-8'>

                <div className='flex justify-between items-center'>
                    <h2 className='font-bold text-black text-[1.125rem] leading-[1.563rem] tracking-[1.28571px] uppercase'>Cart{`(${cartList.length})`}</h2>
                    <button onClick={handleRemoveAll} className='underline font-medium text-black hover:text-custom-orange transition duration-200 text-opacity-50 text-[0.938rem] leading-[1.563rem]'>Remove all</button>
                </div>

                <div className='flex flex-col gap-6 h-full py-8 overflow-scroll'>
                    {/* <CartItem image='/assets/cart/image-xx99-mark-two-headphones.jpg' name='XX99 MK II' price={2999} count={1} />
                    <CartItem image='/assets/cart/image-xx99-mark-two-headphones.jpg' name='XX99 MK II' price={2999} count={1} /> */}
                    {cartList?.map(item => (
                        <CartItem key={item.id} id={item.id} image={item.image} name={item.name} price={item.price} count={item.quantity} />
                    ))}
                </div>

                <div className='flex flex-col'>
                    <div className='flex justify-between items-center mb-6'>
                        <h4 className='font-medium text-black text-opacity-50 text-[0.938rem] leading-[1.563rem] uppercase'>Total</h4>
                        <span className='font-bold text-black text-[1.125rem] leading-[1.563rem]'>${totalCost.toLocaleString()}</span>
                    </div>

                    {/* <BtnCustom className='w-full' handleClick={handleClick} name='Checkout'/> */}
                    <BtnLink handleClick={handleCheckOut} className='w-full text-center bg-custom-orange hover:bg-custom-light-orange' link='/checkout' name='Checkout' disabled={totalCost == 0 ? true : false} />
                </div>
            </motion.div>
        </div>
    )
}

export default Cart