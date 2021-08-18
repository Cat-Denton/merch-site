import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <React.Fragment>
      {props.itemList.map((item) =>
        <Item
          whenItemClicked={props.onItemSelection}
          brand={item.brand}
          model={item.model}
          description={item.description}
          stockQuantity={item.stockQuantity}
          price={item.price}
          id={item.id}
          key={item.id}
        />
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func
}

export default ItemList;