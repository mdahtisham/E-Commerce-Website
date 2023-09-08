// import { useState } from 'react'
// import './cart.css'



// export const Cart = () => {
    
//     return (
//         <div>
//            he
//         </div>
//     )
// }

export const Cart = ({ cart }) => {
    return(
        <div>
            {
                cart.map((cartItem, cartindex) => {
                    return (
                        <div>
                           <img src={cartItem.url} alt="" height={30} width={30}/> 
                           <span>{cartItem.name}</span>
                           <span>{cartItem.category}</span>
                           <span>{cartItem.seller}</span>
                           <button> - </button>
                           <span>{cartItem.quantity}</span>
                           <button> + </button>
                           <span>{cartItem.price}</span>
                           
                        </div>
                    )
                }

                )
            }
        </div>
        
    )
}