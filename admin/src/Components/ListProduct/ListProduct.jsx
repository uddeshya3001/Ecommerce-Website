import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'
const ListProduct = () => {

    const [allproducts, setAllProducts] = useState([]);
    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allproducts')
            .then((res) => res.json())
            .then((data) => { setAllProducts(data) });

    }
    useEffect(() => {
        fetchInfo();
    }, [])

    const removeProduct = async (id) => {
        await fetch('http://localhost:4000/removeproduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id })
        })
        await fetchInfo();
    }

    return (
        <div className='list-product'>
            <h1>All Product List</h1>
            <div className="list-product-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="list-product-allproducts">
                <hr />
                {allproducts.map((product, index) => {
                    return <> <div key={index} className="list-product-format-main">
                        <img src={product.image} alt="" className="list-product-product-icon" />
                        <p>{product.name}</p>
                        <p>${product.old_price}</p>
                        <p>${product.new_price}</p>
                        <p>{product.category}</p>
                        <img onClick={() => { removeProduct(product.id) }} className='list-product-remove-icon' src={cross_icon} alt="" />
                    </div>
                        <hr />
                    </>

                })}
            </div>
        </div>
    )
}

export default ListProduct