"use client"
import React, { useRef, useEffect } from 'react'
import ProductLinks from './product-links'
import { motion } from 'framer-motion'

type Props = {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = ({ setIsMenuOpen }: Props) => {
    const mobileRef = useRef<HTMLDivElement | null>(null)

    const handleClickOutside = (event: MouseEvent) => {
        if (mobileRef.current && !mobileRef.current.contains(event.target as Node)) {
            setIsMenuOpen(false)
        }
    }

    useEffect(() => {

        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }

    })

    return (
        <div className='xl:hidden bg-black z-30 bg-opacity-50 absolute top-[90px] left-0 w-full h-full'>
            <motion.nav
                initial={{ x: -375, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: -375, opacity: 0 }}
                className='bg-white w-full h-[750px] md:h-[340px] flex justify-center pt-[84px] pb-8 px-6 rounded-b-lg' ref={mobileRef}>
                <div className='w-[327px] md:w-[689px]'>
                    <ProductLinks />
                </div>

            </motion.nav>
        </div>
    )
}

export default MobileNav