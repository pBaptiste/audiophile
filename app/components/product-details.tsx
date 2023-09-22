"use client"
import React, { useState, useEffect, useContext } from 'react'
import { DataContext } from '../context/data-provider'
import ResponsiveImage from './responsive-image'
import ProductAmount from './product-amount'
import BtnCustom from './btn-custom'
import { it } from 'node:test'

type Props = {
    newProduct: boolean;
    title: string;
    desc: string;
    image: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    price: number;
}

const removeProductType = (productName: string): string => {
    // Define an array of words to remove
    const wordsToRemove = ['Headphones', 'Earphones', 'Speaker'];

    // Use a regular expression to match and remove the words
    const regex = new RegExp(wordsToRemove.join('|'), 'gi');

    return productName.replace(regex, '').trim();
};

const ProductDetails = ({ newProduct, title, desc, image, price }: Props) => {
    const { cartList, setCartList, setTotalCost } = useContext(DataContext)

    const [amount, setAmount] = useState(0)

    const handleAdd = () => {
        if (amount > 0) {
            const newCartItem = { id: self.crypto.randomUUID(), image: image.mobile, name: removeProductType(title), price: price, quantity: amount }
            setCartList([...cartList, newCartItem])
        }
    }

    useEffect(() => {
        const total = cartList.map((item) => item.price * item.quantity).reduce((a, b) => a + b, 0);
        setTotalCost(total)
    }, [cartList, setTotalCost]);

    return (
        <div className='flex flex-col md:flex-row gap-8 md:gap-[69px] xl:gap-[124.5px] md:justify-center md:items-center'>
            <div className={`relative w-[327px] h-[327px] md:w-[281px] md:h-[480px] xl:w-[540px] xl:h-[560px] flex items-center`}>
                <ResponsiveImage
                    sm={image.mobile}
                    md={image.tablet}
                    lg={image.desktop}
                    alt='product image'
                    className='rounded-lg'
                />
            </div>

            <div className='md:w-[340px] xl:w-[445px]'>
                {newProduct && <h2 className="text-normal text-custom-orange text-[0.875rem] md:text-xs xl:text-[0.875rem] leading-[1.188rem] xl:leading-[1.188rem] md:leading-4 tracking-[10px] xl:tracking-[10px] md:tracking-[8.57143px] mb-6 md:mb-4">NEW PRODUCT</h2>}
                <h4 className='font-bold text-[1.75rem] xl:text-[2.5rem] leading-[2.375rem] md:leading-[2rem] xl:leading-[2.75rem] tracking-[1px] xl:tracking-[1.42857px] uppercase mb-6 md:mb-8'>{title}</h4>
                <p className='font-medium text-[0.938rem] leading-[1.563rem] opacity-50 mb-6 md:mb-8'>{desc}</p>
                <p className='font-bold text-[1.125rem] leading-[1.563rem] tracking-[1.28571px] uppercase mb-8 xl:mb-[47px]'>$ {price.toLocaleString()}</p>
                <div className='flex gap-4'>
                    <ProductAmount amount={amount} setAmount={setAmount} />
                    <BtnCustom name='Add to Cart' handleClick={handleAdd} className={`${amount === 0 && 'cursor-not-allowed'} focus:outline-none active:ring active:ring-custom-light-orange`} />
                </div>
            </div>

        </div>
    )
}

export default ProductDetails