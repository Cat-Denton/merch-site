import React from "react";
import PropTypes from "prop-types";
// import { descriptions } from "jest-config";

function Item(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
      <h3>{props.brand} - {props.model}</h3>
      <h4>${props.price}</h4>
      <p>{props.stockQuantity}</p>
      <hr/>
      </div>
    </React.Fragment>
  )
}

Item.propTypes = {
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  description: PropTypes.string,
  stockQuantity: PropTypes.number,
  price: PropTypes.number,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
  // stockQuantity: PropTypes.number,
  // price: PropTypes.number
};

export default Item;