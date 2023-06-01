import React from "react";

function NewFlavorForm(props) {
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

export default NewFlavorForm;