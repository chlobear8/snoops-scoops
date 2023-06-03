import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
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
        <textarea
          name='flavor'
          placeholder='Flavor Details' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;