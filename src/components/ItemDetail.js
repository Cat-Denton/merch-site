import React from 'react';
import PropTypes from 'prop-types';
// import Item from './Item';

function ItemDetail(props){
  const { item } = props;
  
  return (
    <React.Fragment>
      <h1>Product Details</h1>
      <h3>{item.brand} - {item.model}</h3>
      <p>{item.description}</p>
      <p>price: ${item.price}</p>
      <p>Units in Stock: {item.stockQuantity}</p>
      <button onClick={ props.onClickingEdit}>Edit item details</button>
    </React.Fragment>
  );
}

ItemDetail.propTypes ={
  item: PropTypes.object,
  onClickingEdit: PropTypes.func
}

export default ItemDetail;