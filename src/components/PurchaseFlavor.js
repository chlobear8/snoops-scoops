import React from "react";
import PropTypes from "prop-types";

function PurchaseFlavor(props) {
  const { flavor, initialInventoryCount } = props;

  const decreaseInventory = () => {
    if (initialInventoryCount > 0) {
      initialInventoryCount -= 1;
    }
  };

  return (
    <React.Fragment>
      <h2>Inventory: {initialInventoryCount}</h2>
      <button onClick = {decreaseInventory}>Purchase Pint?</button>
    </React.Fragment>
  );
}

PurchaseFlavor.propTypes = {
  flavor: PropTypes.string,
  initialInventoryCount: PropTypes.number
}

export default PurchaseFlavor;