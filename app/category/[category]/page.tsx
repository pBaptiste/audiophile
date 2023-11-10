"use client"
import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../../context/data-provider'
import ProductInfo from '@/app/components/product-info'
import ProductLinks from '@/app/components/product-links'
import About from '@/app/components/about'
import { Product } from '@/types/types'

const useData = () => {
  return useContext(DataContext);
}

const Category = ({ params }: { params: { category: string } }) => {
  const { productList } = useData()
  const categoryList = productList.filter((item: Product) => item.category === params.category)

  return (
    <main className='bg-[#FAFAFA]'>

      <header className='bg-[#191919] py-8 md:pt-[105px] md:pb-[97px] xl:py-[98px] font-bold text-[1.75rem] md:text-[2.5rem] leading-[2.375rem] md:leading-[2.75rem] tracking-[1px] md:tracking-[1.42857px] uppercase text-white text-center'>
        {params.category}
      </header>

      <section className="pt-[120px] md:pt-[160px] pb-[120px] md:pb-[160px] md:py-24 px-6 md:px-10 xl:px-[165px] flex flex-col items-center gap-[120px] xl:gap-[160px] ">
        <div className='flex flex-col gap-[120px] md:gap-24 xl:gap-[168px] w-[327px] md:w-[689px] xl:w-[1110px]'>
          {categoryList.reverse().map((product, index) => (
            <ProductInfo
              index={index}
              newProduct={product.new}
              title={product.name}
              desc={product.description}
              link={`/productdetail/${product.slug}`}
              images={product.categoryImage}
              key={product.id} />
          ))}
        </div>
        <ProductLinks />
        <About />
      </section>
    </main>
  )
}

export default Category

