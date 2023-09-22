"use client"
import React, { } from 'react'
import data from '../../public/data.json'
import { useState, useEffect, createContext, ReactNode } from "react"
import { Product, Cart } from '@/types/types'

interface DataContextProps {
    productList: Product[];
    cartList: Cart[];
    totalCost: number;
    setProductList: React.Dispatch<React.SetStateAction<Product[]>>;
    setCartList: React.Dispatch<React.SetStateAction<Cart[]>>;
    setTotalCost: React.Dispatch<React.SetStateAction<number>>;
}

export const DataContext = createContext<DataContextProps>({
    productList: [],
    cartList: [],
    totalCost: 0,
    setProductList: () => { },
    setCartList: () => { },
    setTotalCost: () => { },
})

interface DataProviderProps {
    children: ReactNode;
}

const DataProvider = ({ children }: DataProviderProps) => {
    const [productList, setProductList] = useState<Product[]>([]);
    const [cartList, setCartList] = useState<Cart[]>([]);
    const [totalCost, setTotalCost] = useState<number>(0);

    useEffect(() => {
        try {
            setProductList(JSON.parse(JSON.stringify(data)))
            // console.log(JSON.parse(JSON.stringify(data)))
        }
        catch (error) {
            console.log("Error assigning product list ", error)
        }
    }, [])

    return (
        <DataContext.Provider value={{ productList, setProductList, cartList, setCartList, totalCost, setTotalCost }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider