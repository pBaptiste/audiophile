import React from 'react'
import { MouseEventHandler } from 'react'

type Props = {
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    name: string;
    type?: 'button' | 'submit' | 'reset';
}

const BtnCustom = ({ handleClick, className, name, type }: Props) => {
    return (
        <button
            className={`${className} text-white bg-custom-orange hover:bg-custom-light-orange transition duration-300 font-bold text-[0.813rem] leading-[1.125rem] tracking-[1px] uppercase py-[15px] pl-[31.5px] pr-[29.5px]`}
            onClick={handleClick}
            type={type}
        >
            {name}
        </button>
    )
}

export default BtnCustom