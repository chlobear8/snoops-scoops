import React from "react";
import PropTypes from "prop-types";

function FlavorDetail(props) {
  const { flavor } = props;
  return (
    <React.Fragment>
      <h1>Flavor Details</h1>
      <h3>{flavor.name} - {flavor.price}</h3>
        <h3>{flavor.flavor}</h3>
        <p><em>{flavor.allergies}</em></p>
      <button onClick = { props.onClickingEdit }>Update Flavor</button>
      <hr/>
    </React.Fragment>
  );
}

FlavorDetail.propTypes = {
  flavor: PropTypes.object,
  onClickingEdit: PropTypes.func
};

export default FlavorDetail;