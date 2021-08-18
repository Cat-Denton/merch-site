import { v4 } from 'uuid';
import React from 'react';
import ReusableForm from './ReusableForm'
import PropTypes from 'prop-types';

function NewItemForm(props){
  const newItemFormStyles = {
    backgroundColor: '#97FF6D',
    fontFamily: 'sans-serif',
    paddingLeft: '50px'
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewItemFormSubmission}
        buttonText="Add item to inventory" />
    </React.Fragment>
  );
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    const floatPrice = parseFloat(event.target.price.value)
    const quantityOfItems = parseInt(event.target.stockQuantity.value)
    props.onNewItemCreation({brand: event.target.brand.value, model: event.target.model.value, description: event.target.description.value, stockQuantity: quantityOfItems, price: floatPrice, id: v4()});
  }
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;