import React from 'react'
import Item from './Item'

function Container({ products }) {
  
    const productsArr = products.products

    const productLister = (products) => {
        return products.map(product => 
         <Item key={product.id} {...product}></Item>
        )
    }
    
    return (
    <div>
        <h1>Container</h1>
        {/* {productsArr ? productLister(productsArr) : null} */}
        {/* {productLister(productsArr)} */}
        {productsArr ? productLister(productsArr) : null}
    </div>
  )
}

export default Container;