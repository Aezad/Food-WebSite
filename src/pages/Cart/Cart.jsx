import React, { useContext } from 'react'

import "./Cart.css"
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { cartItems, removeFromCart, food_list,getTotalamount } = useContext(StoreContext)

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className="cross">x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalamount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Deliver fee</p>
              <p>${getTotalamount()>0?10:0}</p>
            </div>  
            <hr />
            <div className="cart-total-details">
              <b>Total</b >
              <p>${getTotalamount()>0?getTotalamount()+10:0}</p>
            </div>
          </div>
          <button onClick={()=>navigate("/order")}>Proceed to checkout</button>
        </div>
        
        <div className="cart-promocode">
          <div>
            <p>if you have a promocode, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
