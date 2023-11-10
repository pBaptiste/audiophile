import React from 'react'
import ProductLink from './product-link'

const ProductLinks = () => {
    const products = [
        {
            imgSrc: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
            imgAlt: 'headphones thumbnail',
            imgWidth: 140,
            imgHeight: 135,
            productName: 'Headphones',
            productLink: '/category/headphones'
        },
        {
            imgSrc: '/assets/shared/desktop/image-category-thumbnail-speakers.png',
            imgAlt: 'speakers thumbnail',
            imgWidth: 140,
            imgHeight: 130,
            productName: 'Speakers',
            productLink: '/category/speakers'
        },
        {
            imgSrc: '/assets/shared/desktop/image-category-thumbnail-earphones.png',
            imgAlt: 'earphones thumbnail',
            imgWidth: 150,
            imgHeight: 130,
            productName: 'Earphones',
            productLink: '/category/earphones'
        }
    ];

    return (
        <div className='w-full items-center grid gap-[68px] md:gap-[10px] xl:gap-[30px] md:grid-cols-3'>
            {products.map((product, index) => (
                <ProductLink
                    key={index}
                    imgSrc={product.imgSrc}
                    imgAlt={product.imgAlt}
                    imgWidth={product.imgWidth}
                    imgHeight={product.imgHeight}
                    productName={product.productName}
                    productLink={product.productLink}
                />
            ))}
        </div>
    )
}

export default ProductLinks