import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props){
  return (
    <React.Fragment>
      {props.ItemList.map((item) =>
        <Item 
        brand={item.brand}
        model={item.model}
        description={item.description}
        price={item.price}
        stockQuantity={item.stockQuantity}/>
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,

}

export default ItemList;