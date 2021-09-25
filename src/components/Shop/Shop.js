import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchProducts,setSearchProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setSearchProducts(data);
      });
  }, []);
  const [cart, setCart] = useState([]);
  const handlerAddCart = (product) => {
    const cartProducts = [...cart, product];
    setCart(cartProducts);
    addToDb(product.key);
  };
  const handleSearch = (e) => {
    const searchText = e.target.value;
    const matchedProduct = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchProducts(matchedProduct);
  };
  useEffect(() => {
    const savedCart = getStoredCart();
    if (products.length) {
      const previouslySavedProducts = [];
      for (const key in savedCart) {
        const savedProducts = products.find((product) => product.key === key);
        previouslySavedProducts.push(savedProducts);
        setCart(previouslySavedProducts);
      }
    }
  }, [products]);
  return (
    <>
      <div className="search">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search Your Product"
        />
      </div>
      <div className="shop">
        <div className="products">
          {searchProducts.map((product) => (
            <Products
              product={product}
              key={product.key}
              handlerAddCart={handlerAddCart}
            ></Products>
          ))}
        </div>
        <Cart cart={cart}></Cart>
      </div>
    </>
  );
};

export default Shop;
