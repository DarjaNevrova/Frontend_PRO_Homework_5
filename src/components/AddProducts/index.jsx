import React from 'react'
import style from './style.module.css'

export default function AddProducts({ submit }) {
  return (
    <div className={style.item}>
      <form onSubmit={submit}>
        <input className={style.input} type="text" name='title' placeholder='Название' />
        <input className={style.input} type="number" name='price' placeholder='Цена' />
        <button className={style.button}>Добавить</button>
      </form>
    </div>
  )
}
