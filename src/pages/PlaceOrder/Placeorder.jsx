import React, { useContext } from 'react'

import "./Placeorder.css"
import { StoreContext } from '../../context/StoreContext'

const Placeorder = () => {

  const {getTotalamount} = useContext(StoreContext)

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
       </div>
       <input type="Email" placeholder='Email address' />
       <input type="Email" placeholder='Street' />
       
       <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
       </div>
       <div className="multi-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
       </div>
       <input type="text" placeholder='phone' />
      </div>
      <div className="place-order-right">

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
          <button>Proceed to payment</button>
        </div>

      </div>
    </form>
  )
}

export default Placeorder
