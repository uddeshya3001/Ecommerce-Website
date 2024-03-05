import React from 'react'
import './descriptionbox.css'
import random from '../ProductDisplay/random';
const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews <span>{random(1000)}</span>  </div>
            </div>
            <div className="descriptionbox-description">
                <p>An E-commerce website is an online platform that facilitates the buying and selling of products and services**. It serves as a virtual storefront where businesses and consumers can interact, conduct transactions, and exchange goods or digital offerings. Through an e-commerce website, businesses can process orders, accept payments, manage shipping logistics, and provide customer service. The concept of e-commerce has evolved significantly with the rise of the Internet, making it convenient for people to shop from anywhere and at any time. Whether it's tangible goods, digital products, or services, e-commerce has become an integral part of modern commerce. </p>  </div>
        </div>
    )
}

export default DescriptionBox