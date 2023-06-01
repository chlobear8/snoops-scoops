import React from "react";
import PropTypes from "prop-types";

function NewFlavorForm(props) {

  function handleNewFlavorFormSubmission(event)
  {
    event.preventDefault();
    console.log(event.target.name.value);
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