import './Iphone.css'
import { useState } from 'react'

import { Cart } from './cart'

import cartimage from './Iphoneimages/cart-image.jpg'

export const Iphone = () => {

    const [cart, setCart] = useState([]);

    const [showCart, setShowCart] = useState(false)

    const updateCart = (updatedCart) => {
        setCart(updatedCart);
    }

    const addToCart = (data) => {
        setCart([...cart, data])
    }

    const toggleCart = () => {
        setShowCart(!showCart)
    }
    

    const [product, setProduct] = useState([
        {
            url: 'https://imgur.com/635oX9l.jpeg',
            name: 'iPhone 15 Pro Max',
            brand: 'Apple',
            price: 159900,
            quantity: 1
        },
        {
            url: 'https://imgur.com/E1qaVAs.jpeg',
            name: 'iPhone  15 Pro ',
            brand: 'Apple',
            price: 134900,
            quantity: 1
        },
        {
            url: 'https://imgur.com/lk7nukb.jpeg',
            name: 'iPhone 15 Model',
            brand: 'Apple',
            price: 79900,
            quantity: 1
        },
        {
            url: 'https://i.imgur.com/naze7oa.jpeg',
            name: 'iPhone 14 Pro Max',
            brand: 'Apple',
            price: 132999,
            quantity: 1
        },
        {
            url: 'https://i.imgur.com/MpkMM8p.jpeg',
            name: 'iPhone  14 Pro ',
            brand: 'Apple',
            price: 123999,
            quantity: 1
        },
        {
            url: 'https://i.imgur.com/V4l2fal.jpeg',
            name: 'iPhone 14 Model',
            brand: 'Apple',
            price: 69513,
            quantity: 1
        },
        {
            url: 'https://i.imgur.com/rSxITVr.jpeg',
            name: 'iPhone 13 Pro Max',
            brand: 'Apple',
            price: 129900,
            quantity: 1
        },
        {
            url: 'https://i.imgur.com/1Vj2wZD.jpeg',
            name: 'iPhone  13  Pro ',
            brand: 'Apple',
            price: 119900,
            quantity: 1
        },
        {
            url: 'https://i.imgur.com/7w8eLqY.png',
            name: 'iPhone 13',
            brand: 'Apple',
            price: 69900,
            quantity: 1
        }
    ])

    const itemCount = cart.length


    return (
        <div className='iphone-container'>
         <button className='btn-showcard' onClick={toggleCart}>{showCart ? 'Return Shop': <span><img src={cartimage} alt="" height={35} width={40} /></span> }</button> 
        <button className='cart-number' onClick={toggleCart}> {showCart ? '' : itemCount > 0 && itemCount}  </button>
            {showCart ? 
            <Cart cart={cart} updateCart={updateCart} /> :
                product.map((productItem, productIndex) =>{
                    return(  
                        
                        <div className='iphone-row' key={productIndex}>
                            <div className='iphone-item'>
                                <div className='iphone-grid'>
                                    <img src={productItem.url} alt="" height={170} width={250}/>
                                </div>
                                <div className='iphone-details'>
                                     <b>
                                {
                                    productItem.name
                                }
                                </b>
                                </div>
                                <p className='iphone-details'>{productItem.brand}</p>
                                <p className='iphone-details'>From <b> &#8377; {productItem.price} </b></p>
                                
                                <div>
                                <button className='addtocart-button' onClick={() => addToCart(productItem)}>Add to Cart</button> 
                                <button className='buy-button' onClick={toggleCart}>Buy</button>
                            </div>

                            </div>
                        </div>                    
                    )
                })
            
            }
        </div>
    )

}