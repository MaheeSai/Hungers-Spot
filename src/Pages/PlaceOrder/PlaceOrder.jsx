import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import'./PlaceOrder.css'

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)
  return (
    <div className="container">
      <form className='place-order'>
        <div className="place-order-left">
          <h2 className='title'>Delivery Information</h2>
          <div className="multi-fields">
            <input type='text' placeholder='first name' />
            <input type='text' placeholder='last name' />
          </div>
          <input type='email' placeholder='enter email' />
          <input type='text' placeholder='street' />
          <div className="multi-fields">
            <input type='text' placeholder='city' />
            <input type='text' placeholder='state' />
          </div>
          <div className="multi-fields">
            <input type='text' placeholder='zipcode' />
            <input type='text' placeholder='country' />
          </div>
          <input type='text' placeholder='phone' />
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount() + 2}</b>
              </div>
            </div>
            <button>
              Proceed To Payment
            </button>
          </div>
        </div>

      </form>
    </div>

  )
}

export default PlaceOrder