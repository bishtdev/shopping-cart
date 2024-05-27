import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import CartItem from './CartItem'
import './Cart.css'

const Cart = () => {
  const {removeToCart, cartItems} = useContext(ShopContext)
  return (
    <div className='cart'>
      <div className='carttitle'>
        <h1> Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product, index) =>{
          if(cartItems[product.id] !==0){
            return <CartItem key={index} data={product}/>
          }
        })}
      </div>
        
      
    </div>

  )
}

export default Cart