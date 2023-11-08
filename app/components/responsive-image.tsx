"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

type Props = {
    sm: string,
    md: string,
    lg: string,
    alt: string
    className?: string
    sizes?: string
    priority?: boolean
}

const ResponsiveImage = ({ sm, md, lg, alt, className, sizes, priority }: Props) => {
    const [src, setSrc] = useState(sm)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const tabletMediaQuery = window.matchMedia('(min-width: 768px)')
            const desktopMediaQuery = window.matchMedia('(min-width: 1280px)')

            const handleMediaChange = () => {
                if (desktopMediaQuery.matches) {
                    setSrc(lg)  // Use large image for desktop screens
                } else if (tabletMediaQuery.matches) {
                    setSrc(md)  // Use medium image for tablet screens
                } else {
                    setSrc(sm)  // Use small image for smaller screens
                }
            }
            handleMediaChange()

            tabletMediaQuery.addEventListener('change', handleMediaChange)
            desktopMediaQuery.addEventListener('change', handleMediaChange)

            return () => {
                tabletMediaQuery.removeEventListener('change', handleMediaChange)
                desktopMediaQuery.removeEventListener('change', handleMediaChange)
            }
        }

        return () => { }
    },)

    return (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`${className} object-cover`} />
    )
}

export default ResponsiveImage