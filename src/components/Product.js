import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, price, rating, image }) => {
  const [{}, dispatch] = useStateValue();
  // console.log(basket);
  const addToBasket = () => {
    //dispatch the item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        key:id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p><strong>{title}</strong></p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <StarIcon />
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket} type="button">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
