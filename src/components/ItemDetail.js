import React from 'react';
import PropTypes from 'prop-types';

function ItemDetail(props){
  const { item, onClickingDelete } = props;

  function handleBuyButton() {
    const newStockQuantity = item.stockQuantity -=1;
    props.onClickingBuy({brand: item.brand, model: item.model, description: item.description, stockQuantity: newStockQuantity, price: item.price, id: item.id})    
  }

  return (
    <React.Fragment>
      <h1>Product Details</h1>
      <h3>{item.brand} - {item.model}</h3>
      <p>{item.description}</p>
      <p>price: ${item.price}</p>
      <p>Units in Stock: {item.stockQuantity}</p>
      <button onClick={ props.onClickingEdit}>Edit item details</button>
      <button onClick={()=> onClickingDelete(item.id)}>Delete this product from stock</button>
      <button onClick={handleBuyButton}>Buy 1 unit of product</button>
    </React.Fragment>
  );
}

ItemDetail.propTypes ={
  item: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingBuy: PropTypes.func
}

export default ItemDetail;