import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditFlavorForm(props) {
  const { flavor } = props;

  function handleEditingFlavorFormSubmission(event) {
    event.preventDefault();
    props.onEditFlavor({name: event.target.name.value,
      flavor: event.target.flavor.value,
      price: event.target.price.value,
      allergies: event.target.allergies.value,
      id: flavor.id})
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditingFlavorFormSubmission}
        buttonText="Update Flavor" />
    </React.Fragment>
  );
}

EditFlavorForm.propTypes = {
  flavor: PropTypes.object,
  onEditFlavor: PropTypes.func
};

export default EditFlavorForm;