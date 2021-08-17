import React from "react";
import PropTypes from "prop-types";
// import { descriptions } from "jest-config";

function Item(props){
  return (
    <React.Fragment>
      <h3>{props.brand} - {props.model}</h3>
      <h4>${props.price}</h4>
      <p>{props.description}</p>
    </React.Fragment>
  )
}

Item.propTypes = {
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  description: PropTypes.string,
  stockQuantity: PropTypes.string,
  price: PropTypes.string
  // stockQuantity: PropTypes.number,
  // price: PropTypes.number
};

export default Item;