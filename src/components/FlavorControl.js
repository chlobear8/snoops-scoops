import React from "react";
import NewFlavorForm from "./NewFlavorForm";
import FlavorList from "./FlavorList";

class FlavorControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainFlavorList: []
    };
  }

  render() {
    let currentlyVisibleState = null;
    let addFlavorButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewFlavorForm />
    } else {
      currentlyVisibleState = <FlavorList />
      addFlavorButton= <button onClick = {this.handleClick}>Add Flavor</button>
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addFlavorButton}
      </React.Fragment>
    );
  }

}

export default FlavorControl;