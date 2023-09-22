"use client"
import React, { useState, useContext, useEffect } from 'react'
import { DataContext } from '../context/data-provider'
import ProductAmount from './product-amount'
import Image from 'next/image'

type Props = {
    id: string;
    image: string;
    name: string;
    price: number;
    count: number
}

const CartItem = ({ id, image, name, price, count }: Props) => {
    const [amount, setAmount] = useState(count)
    const { setTotalCost, cartList, setCartList } = useContext(DataContext)

    useEffect(() => {
        if (amount !== count) {
            if (amount === 0) {
                const updatedCartList = cartList.filter(item => item.id !== id)
                setCartList(updatedCartList)
                const totalCost = updatedCartList.reduce((total, item) => total + item.price * item.quantity, 0);
                setTotalCost(totalCost);
            }
            else {
                // Create a new array with updatedCartItem
                const updatedCartList = cartList.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: amount };
                    }
                    return item;
                });
                setCartList(updatedCartList);
                const totalCost = updatedCartList.reduce((total, item) => total + item.price * item.quantity, 0);
                setTotalCost(totalCost);
            }

        }
    }, [amount, setTotalCost, cartList, setCartList, id])

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center mr-5'>
                <Image
                    src={image}
                    alt='cart image'
                    width={64}
                    height={64}
                    className='rounded-lg mr-4 md:mr-6'
                />
                <div className=''>
                    <h4 className='font-bold text-black text-[0.938rem] leading-[1.563rem] uppercase'>{name}</h4>
                    <p className='font-bold text-black text-opacity-50 text-sm leading-[1.563rem]'>${price.toLocaleString()}</p>
                </div>
            </div>


            <div className=''>
                <ProductAmount amount={amount} setAmount={setAmount} />
            </div>

        </div>
    )
}

export default CartItem