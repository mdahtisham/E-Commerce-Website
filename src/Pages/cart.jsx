import { useState } from "react"
import './cart.css'

export const Cart = ( {cart, updateCart} ) => {

    const increaseQuantity = (index) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity += 1;
        updateCart(updatedCart);
    };
    const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 0){
        updatedCart[index].quantity -= 1
        updateCart(updatedCart);
        }
    }
    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }

    const isCartEmpty = cart.length === 0;

    return (
        <div>
            <div>
                <div className="cart-name"><h2>Shopping Cart</h2></div>
                <hr />
            <div className="cart-item-details-name">
                <div className="cart-item-details-list">
                    Model Name
                </div>
                <div className="cart-item-details-list">
                    Brand
                </div>
                <div className="cart-item-details-list">
                    Color
                </div>
                <div className="cart-item-details-list">
                    Storage
                </div>
                <div className="cart-item-details-list">
                    Amount
                </div>
                <div className="cart-item-details-list">
                    Quantity
                </div>
            </div>
           
            </div>
            {isCartEmpty ?  <div className="cart-empty"><p className="cart-empty-text">Your Cart is Empty</p> <p className="cart-empty-text">Add your Favorite item in Cart</p></div>  : 
            
               cart.map((cartItem, cartIndex) =>{
                    return (
                        <div className="cart-list">
                        <div className="cart-item" key={cartIndex}>
                        <span className="cart-item">{cartItem.name}</span>
                        <span className="cart-item">{cartItem.brand}</span>
                        <select className="cart-item" name="" id="">
                                    <option value="black">Matte Black</option>
                                    <option value="white">Star Light</option>
                                    <option value="red">Red</option>
                                    <option value="white">Mid Night</option>
                                    <option value="blue">Blue</option>
                                    <option value="blue">Purple</option>
                                    <option value="blue">Green</option>
                        </select>
                        <select className="cart-item" name="" id="">
                                    <option value="128">128 GB</option>
                                    <option value="256">256 GB</option>
                                    <option value="512">512 GB</option>
                        </select>
                        <span className="cart-item">&#8377;{cartItem.price}</span>
                        <span className="cart-item">Quantity: <button className="quantity-button" onClick={() => decreaseQuantity(cartIndex)}>-</button> <b>{cartItem.quantity}</b> <button className="quantity-button" onClick={() => increaseQuantity(cartIndex)}>+</button></span>
                        
                        </div>
                        </div>                       
                    )
                })
}
            {!isCartEmpty && (
            <div>
              <h2><span className="total-amount"> <strong>Total Amount: &#8377; {calculateTotalPrice()}</strong> </span> </h2>
            </div> 
            )}  
        </div>
    )
}