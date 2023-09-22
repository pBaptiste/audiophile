"use client"
import React, { useContext } from 'react'
import { Product } from '@/types/types'
import { DataContext } from '@/app/context/data-provider'
import Link from 'next/link'
import ProductDetails from '@/app/components/product-details'
import ProductGallery from '@/app/components/product-gallery'
import ProductLinks from '@/app/components/product-links'
import About from '@/app/components/about'
import Recommended from '@/app/components/recommended'
import { useRouter } from 'next/navigation'

const ProductDetail = ({ params }: { params: { slug: string } }) => {

    const { productList } = useContext(DataContext)

    const currentProduct = productList.find((item: Product) => (item.slug === params.slug))

    const featureParagraphs = currentProduct?.features.split('\n\n');

    const router = useRouter()

    const handleBack = () => {
        router.back()
    }

    return (
        <main className='bg-[#FAFAFA] pt-4 pb-[120px] px-6 md:px-10 xl:px-[165px] flex flex-col gap-[120px]'>
            <section className="pt-4 md:pt-[33px] xl:pt-20 pb-[120px] md:pb-[160px] md:py-24 px-6 md:px-10 xl:px-[165px] flex flex-col items-center gap-[120px] xl:gap-[160px] ">
                <div className='flex flex-col gap-[120px] md:gap-24 xl:gap-[168px] w-[327px] md:w-[689px] xl:w-[1110px]'>
                    <div>
                        <div className='mb-6 xl:mb-14'>
                            <button onClick={handleBack} className='font-medium text-[0.938rem] leading-[1.563rem] text-black text-opacity-50'>Go Back</button>
                        </div>

                        {currentProduct &&
                            <ProductDetails
                                newProduct={currentProduct.new}
                                title={currentProduct.name}
                                desc={currentProduct.description}
                                image={currentProduct.image}
                                price={currentProduct.price}
                            />
                        }
                    </div>

                    {
                        currentProduct &&
                        <section className="flex flex-col xl:flex-row gap-[88px] xl:gap-[125px]">

                            <div className='xl:basis-[635px]'>
                                <h3 className='font-bold text-[1.5rem] md:text-[2rem] leading-9 tracking-[0.857143px] md:tracking-[1.14286px] uppercase mb-6'>Features</h3>
                                <div className='flex flex-col gap-8'>
                                    {featureParagraphs && featureParagraphs.map((item, index) => (
                                        <p key={index} className='font-medium text-[0.938rem] leading-[1.563rem] opacity-50'>{item}</p>
                                    ))}
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row xl:flex-col gap-6 md:gap-[167px] xl:gap-8'>
                                <h3 className='font-bold text-[1.5rem] md:text-[2rem] leading-9 tracking-[0.857143px] md:tracking-[1.14286px] uppercase'>In The Box</h3>
                                <div className='flex flex-col gap-2'>
                                    {currentProduct && currentProduct.includes.map((item, index) => (
                                        <div className='flex gap-6 items-center text-[0.938rem] leading-[1.563rem]' key={index}>
                                            <span className='font-bold text-custom-orange'>{item.quantity}X</span>
                                            <p className='font-medium capitalize opacity-50'>{item.item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    }

                    {currentProduct &&
                        <ProductGallery
                            first={currentProduct.gallery.first}
                            second={currentProduct.gallery.second}
                            third={currentProduct.gallery.third}
                        />
                    }

                    <section>
                        <h3 className='text-center text-black font-bold text-[1.5rem] md:text-[2rem] leading-9 tracking-[0.857143px] md:tracking-[1.14286px] uppercase mb-10 md:mb-14 xl:mb-16'>You May Also Like</h3>
                        <div className='grid md:grid-cols-3 justify-center gap-14 md:gap-[11px] xl:gap-[30px] md:gap-y-10'>
                            {
                                currentProduct && (
                                    currentProduct.others.map(item => (
                                        <Recommended key={item.slug} image={item.image} name={item.name} slug={item.slug} />
                                    ))
                                )
                            }
                        </div>
                    </section>

                    <ProductLinks />
                    <About />
                </div>
            </section>
        </main>
    )
}

export default ProductDetail