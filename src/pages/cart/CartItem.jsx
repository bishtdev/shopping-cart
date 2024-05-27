import React, { useContext } from 'react'
import './Cart.css'
import { ShopContext } from '../../context/shop-context'

const CartItem = ({data}) => {

    const {cartItems, addToCart, removeToCart, updateCartItemCount} = useContext(ShopContext)
  return (
    <div className='cartItem'>
        <img src={data.productImage} alt='productImg' width={200} height={200} />
        <div className='description'>
            <p>
                <b> {data.productName}</b>
            </p>
            ${data.price}
            <div className="countHandler">
                <button onClick={()=> removeToCart(data.id)}> - </button>
                <input value={cartItems[data.id]} onChange={((e)=> updateCartItemCount(Number( e.target.value),data.id))} />
                <button onClick={()=> addToCart(data.id)}> + </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem