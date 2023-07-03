import React, { useState } from 'react'
import AddProducts from '../AddProducts';
import ProductList from '../ProductList';

export default function Products() {

    const [products, setProducts] = useState([]);

    const submit = event => {
        event.preventDefault();
        const title = event.target.title.value;
        const price = event.target.price.value;
        const product = { title, price };
        setProducts([...products, product]);
        console.log(product);
        event.target.reset();
    }

    const remove = (productToRemove) => {
        const newList = products.filter(product => product !== productToRemove);
        setProducts(newList);
    };

    return (
        <div>
            <AddProducts submit={submit} />
            <ProductList products={products} remove={remove} />
        </div>
    );
}