import React from "react";
import PropTypes from "prop-types";

function Flavor(props) {
  return (
    <React.Fragment>
      <div>
        <h3>{props.name} - {props.price}</h3>
        <h3>{props.flavor}</h3>
        <p><em>{props.allergies}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Flavor.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.number,
  allergies: PropTypes.string,
  id: PropTypes.string
}

export default Flavor;