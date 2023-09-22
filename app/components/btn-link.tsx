import React from 'react'
import Link from 'next/link'

type Props = {
    handleClick?: () => void;
    className: string;
    link: string;
    name: string;
}

const BtnLink = ({ handleClick, className, link, name }: Props) => {
    return (
        <Link
            onClick={handleClick}
            className={`${className} transition duration-300 font-bold text-[0.813rem] leading-[1.125rem] tracking-[1px] uppercase py-[15px] pl-[31.5px] pr-[29.5px]`}
            href={link}>{name}
        </Link>
    )
}

export default BtnLink