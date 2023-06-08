import React from "react";
import PropTypes from "prop-types";

function Flavor(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenFlavorClicked(props.id)}>
        <h3>{props.name} - {props.price}</h3>
        <h3>{props.flavor}</h3>
        <p><em>Allergens: {props.allergies}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Flavor.propTypes = {
  name: PropTypes.string.isRequired,
  flavor: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  allergies: PropTypes.string,
  id: PropTypes.string,
  whenFlavorClicked: PropTypes.func
}

export default Flavor;