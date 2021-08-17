import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props){
  return (
    <React.Fragment>
      {props.itemList.map((item) =>
        <Item 
        brand={item.brand}
        model={item.model}
        description={item.description}
        stockQuantity={item.stockQuantity}
        price={item.price}
        />
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,

}

export default ItemList;