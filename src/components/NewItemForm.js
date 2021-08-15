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
    props.onNewItemCreation({brand: event.target.brand.value, model: event.target.model.value, description: event.target.description.value, price: event.target.price.value, stockQuantity: event.target.stockQuantity.value, id: 4()});
  }
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;