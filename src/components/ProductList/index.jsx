import React from 'react'
import ProductItem from '../ProductItem'

export default function ProductList({ products, remove }) {
  return (
    <div>
      {
        products.map(product => (<ProductItem key={product} product={product} remove={remove} />))
      }
    </div>
  );
}