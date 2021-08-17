import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';

class ItemControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    formVisibleOnPage: false,
    masterItemList: []
    };
  }

  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({
      masterItemList: newMasterItemList,
      formVisibleOnPage: false
    })
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />
      buttonText = "Return to inventory";
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.masterItemList} />
      buttonText = "Add new item to inventory"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
        <p>hi there!!</p>
      </React.Fragment>
      
    ) 
  }
}

export default ItemControl;
