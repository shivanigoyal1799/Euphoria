import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal.js"
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
  const [{basket}] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        {basket.length===0 ?(
          <div>
            <h2 >Your Shopping Cart is Empty</h2>
            <p>
              You have no items in your cart. To buy one or more items, click
              "Add to cart" next to the item
            </p>
          </div>
        ):(

        <div>
          <h2 className="checkout__title">
            Your Shopping Cart 
          </h2>
          {/* List out all of the checkout products */}
          {basket?.map((item)=>(
            <CheckoutProduct
                id={item.id}
                key={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            
          ))}
        </div>
        )}
      </div> 
      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout;
