import React from 'react'
import style from './style.module.css'

export default function ProductItem({ product, remove }) {
  return (
    <div className={style.product}>
      <p className={style.productTitle}>{product.title}</p>
      <p className={style.productPrice}>{product.price}</p>
      <button className={style.removeButton} onClick={() => remove(product)}>X</button>
    </div>
  );
}