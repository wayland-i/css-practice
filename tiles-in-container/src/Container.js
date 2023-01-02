import React from 'react'

function Container({ products }) {
  

    const productLister = (products) => {
        products.map((product) => {
            return <li>{product.title}</li>
        })
    }
  
    
    return (
    <div>
        <h1>Container</h1>
        <ul>
            {productLister}
        </ul>
    </div>
  )
}

export default Container;