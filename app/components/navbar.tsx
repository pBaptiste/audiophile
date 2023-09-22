"use client"
import React, { useState, useContext } from 'react'
import { DataContext } from '../context/data-provider'
import Image from 'next/image'
import Link from 'next/link'
import Cart from './cart'
import MobileNav from './mobile-nav'

const Navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { cartList } = useContext(DataContext)

    const handleCart = () => {
        setIsCartOpen((prevCart) => !prevCart)
    }

    const handleMenu = () => {
        setIsMenuOpen((prevMenu) => !prevMenu)
    }

    return (
        <header className='relative bg-[#191919] text-white md:px-10 xl:px-[165px]'>
            <nav className='px-6 md:px-0 py-8 xl:pb-9 flex items-center xl:justify-between'>

                {/* mobile menu hamburger */}
                <div className='flex-none xl:hidden'>
                    <button
                        onClick={handleMenu}>
                        <Image
                            src='/assets/shared/tablet/icon-hamburger.svg'
                            alt='Mobile Menu Icon'
                            width={16}
                            height={15} />
                    </button>
                </div>

                {/* Logo & Link to the home page */}
                <div className='grow xl:grow-0 flex justify-center md:justify-start md:pl-[42px] xl:pl-0'>
                    <Link href='/'>
                        <Image
                            src='/assets/shared/desktop/logo.svg'
                            alt='Logo'
                            width={143}
                            height={25} />
                    </Link>
                </div>

                {/* Desktop Navigation List */}
                <ul className='hidden xl:flex gap-[34px]'>
                    <li className='font-bold text-[0.813rem] leading-[1.563rem] tracking-[2px] uppercase hover:text-custom-orange transition duration-200'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='font-bold text-[0.813rem] leading-[1.563rem] tracking-[2px] uppercase hover:text-custom-orange transition duration-200'>
                        <Link href='/category/headphones'>Headphones</Link>
                    </li>
                    <li className='font-bold text-[0.813rem] leading-[1.563rem] tracking-[2px] uppercase hover:text-custom-orange transition duration-200'>
                        <Link href='/category/speakers'>Speakers</Link>
                    </li>
                    <li className='font-bold text-[0.813rem] leading-[1.563rem] tracking-[2px] uppercase hover:text-custom-orange transition duration-200'>
                        <Link href='/category/earphones'>Earphones</Link>
                    </li>
                </ul>

                {/* Shopping Cart Menu Icon */}
                <div className="">
                    <button
                        className='relative'
                        onClick={handleCart}>
                        <Image
                            src='/assets/shared/desktop/icon-cart.svg'
                            alt='Shopping Cart Icon'
                            width={23}
                            height={20} />
                        {cartList?.length > 0 &&
                            <div className='absolute top-[-17px] right-[-12px] bg-custom-orange text-white flex items-center justify-center w-[17px] h-[17px] text-xs font-bold rounded-full'>
                                {cartList?.length}
                            </div>
                        }
                    </button>

                </div>
            </nav>

            {/* Dynamically Rendered Menu Components */}
            {isMenuOpen && <MobileNav setIsMenuOpen={setIsMenuOpen} />}

            {isCartOpen && <Cart setIsCartOpen={setIsCartOpen} />}
        </header>
    )
}

export default Navbar