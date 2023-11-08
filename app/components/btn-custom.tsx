import React from 'react'
import { MouseEventHandler } from 'react'

type Props = {
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    name: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

const BtnCustom = ({ handleClick, className, name, type, disabled }: Props) => {
    return (
        <button
            className={`${className} ${disabled ? 'cursor-not-allowed hover:opacity-50' : 'cursor-pointer hover:bg-custom-light-orange'} text-white bg-custom-orange transition duration-300 font-bold text-[0.813rem] leading-[1.125rem] tracking-[1px] uppercase py-[15px] pl-[31.5px] pr-[29.5px]`}
            onClick={handleClick}
            type={type}
            disabled={disabled}
        >
            {name}
        </button>
    )
}

export default BtnCustom