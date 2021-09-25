import React from "react";
import Rating from "react-rating";
import "./Products.css";

const Products = (prop) => {
  const { name, price, seller, img, stock, star} = prop.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="pr-img" />
      </div>
      <div className="product-details">
        <h3>{name}</h3>
        <a className="seller" href="_seller">
          Visit {seller} Store
        </a>
        <h4>${price}</h4>
        <p>Stocks Remaining: {stock}</p>
        <Rating className="rating"
          initialRating={star}
          emptySymbol="far fa-star"
          fullSymbol="fa fa-star"
          readonly
        />{" "}
        <br />
        <button onClick={() => prop.handlerAddCart(prop.product)}>
          <i className="fas fa-shopping-cart"></i> Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
