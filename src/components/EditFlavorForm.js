import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditFlavorForm(props) {
  return (
    <React.Fragment>
      <ReusableForm
        buttonText="Update Flavor" />
    </React.Fragment>
  );
}

EditFlavorForm.propTypes = {
  flavor: PropTypes.object,
  onEditFlavor: PropTypes.func
};

export default EditFlavorForm;