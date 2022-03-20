import React from 'react';
import'./Product.css';

const Product = (props) => {
  console.log(props.product);
  const {name, price, img, description, stock, seller} = props.product;
  return (
    <div className='product'>
      <div>
        <img src={img} alt="" />
      </div>
     <div className='text-space'>
        <h1 className='product-name '>Name: {name}</h1>
        <h2>Price: {price}</h2>
        <h5>Seller:{seller}</h5>
     </div>
    </div>
  );
};

export default Product;