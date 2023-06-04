import React from "react";
import PropTypes from "prop-types";

function PurchaseFlavor(props) {
  const { flavor, initialInventoryCount, onPurchaseFlavor } = props;

  const decreaseInventory = () => {
    if (initialInventoryCount > 0) {
      onPurchaseFlavor(flavor);
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
  initialInventoryCount: PropTypes.number,
  onPurchaseFlavor: PropTypes.func
}

export default PurchaseFlavor;