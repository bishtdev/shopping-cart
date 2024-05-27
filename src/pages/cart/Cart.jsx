import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import CartItem from './CartItem'
import './Cart.css'
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const {getTotalCartAmount, cartItems} = useContext(ShopContext)
  const CartAmount = getTotalCartAmount()
  const navigate = useNavigate()
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
      {CartAmount > 0 ? 
        <div className='checkout'>
          <p> Subtotal: ${CartAmount}</p>
          <button onClick={()=>navigate('/')}> Continue Shopping</button>
          <button> Checkout</button>
        </div>
        : <h1 className='dev'>You Cart Is Empty</h1>}
      
    </div>

  )
}

export default Cart