import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditItemForm (props) {
  const { item } = props;

  function handleEditItemFormSubmission(event) {
    const floatPrice = parseFloat(event.target.price.value)
    const quantityOfItems = parseInt(event.target.stockQuantity.value)
    props.onEditItem({brand: event.target.brand.value, model: event.target.model.value, description: event.target.description.value, stockQuantity: quantityOfItems, price: floatPrice, id: item.id});
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleEditItemFormSubmission}
      buttonText="Update item details" />
    </React.Fragment>
  );
}

EditItemForm.propTypes = {
  item: PropTypes.object,
  onEditItem: PropTypes.func
}

export default EditItemForm;