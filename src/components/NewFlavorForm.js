import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewFlavorForm(props) {

  function handleNewFlavorFormSubmission(event)
  {
    event.preventDefault();
    props.onNewFlavorCreation({
      name: event.target.name.value,
      flavor: event.target.flavor.value,
      price: event.target.price.value,
      allergies: event.target.allergies.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <form onSubmit = {handleNewFlavorFormSubmission}>
        <input 
          type='text'
          name='name'
          placeholder='Ice Cream Name' />
        <input
          type='text'
          name='flavor'
          placeholder='Ice Cream Flavor' />
        <input
          type='number'
          name='price'
          placeholder='Pint Price' />
        <input
          type='text'
          name='allergies'
          placeholder='Allergens' />
      </form>
    </React.Fragment>
  );
}

NewFlavorForm.propTypes = {
  onNewFlavorCreation: PropTypes.func
};

export default NewFlavorForm;