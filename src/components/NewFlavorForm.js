import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewFlavorForm(props) {

  function handleNewFlavorFormSubmission(event)
  {
    event.preventDefault();
    props.onNewFlavorCreation({
      name: event.target.name.value,
      flavor: event.target.flavor.value,
      price: parseInt(event.target.price.value),
      allergies: event.target.allergies.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleNewFlavorFormSubmission}
      buttonText="New Flavor" />
    </React.Fragment>
  );
}

NewFlavorForm.propTypes = {
  onNewFlavorCreation: PropTypes.func
};

export default NewFlavorForm;