import React from 'react';

class ItemControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    formVisibleOnPage: false,
    masterItemList: []
    };
  }

  render() {
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    ) 
  }
}

export default ItemControl;
