import React from 'react'
import Item from './Item'

function Container({ products }) {
  
    const productsArr = products.products

    const productLister = (products) => {
        return products.map(product => 
         <Item key={product.id} {...product}></Item>
        )
    }

    console.log(productsArr)
    
    return (
    <div className='Container'>
        <h1>Container</h1>
        <div className='container'>
            {productsArr ? productLister(productsArr) : null}
        </div>
    </div>
  )
}

export default Container;