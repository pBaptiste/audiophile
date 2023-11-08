import React from 'react'
import Link from 'next/link'

type Props = {
    handleClick?: () => void;
    className: string;
    link: string;
    name: string;
    disabled?: boolean;
}

const BtnLink = ({ handleClick, className, link, name, disabled }: Props) => {
    return (
        <Link
            onClick={handleClick}
            href={link}>
            <button
                className={`${className} ${disabled ? 'cursor-not-allowed hover:opacity-50' : 'cursor-pointer'} transition duration-300 font-bold text-[0.813rem] leading-[1.125rem] tracking-[1px] uppercase py-[15px] pl-[31.5px] pr-[29.5px]`}
                disabled={disabled}>{name}
            </button>
        </Link>
    )
}

export default BtnLink