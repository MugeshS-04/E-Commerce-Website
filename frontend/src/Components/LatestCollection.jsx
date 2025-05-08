import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/Shopcontext'
import Title from './Title'
import ProductItems from './ProductItems'

function LatestCollection() {

    const { products } = useContext(ShopContext)
    const [latestProducts, setlatestProducts] = useState([])

    useEffect(() => {
        setlatestProducts(products.slice(0, 10))
    }, [])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'Latest'} text2={'Collections'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Sample text to see how it displays it</p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((item, index) => (
                    <ProductItems key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection
