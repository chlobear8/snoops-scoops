import React from "react";
import Flavor from "./Flavor";
import PropTypes from "prop-types";

const mainFlavorList = [
  {
    name: 'Cookie Monster Dough',
    flavor: 'Blue cookie dough',
    price: 8,
    allergies: 'gluten, egg, dairy'
  }
]

function FlavorList(props) {
  return (
    <React.Fragment>
      <hr/>
      {mainFlavorList.map((flavor) => 
        <Flavor
          name={flavor.name}
          flavor={flavor.flavor}
          price={flavor.price}
          allergies={flavor.allergies}
          id={flavor.id}
          key={flavor.id} />
        )}
    </React.Fragment>
  );
}

FlavorList.propTypes = {
  flavorList: PropTypes.array
};

export default FlavorList;