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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState =>({formVisibleOnPage: !prevState.formVisibleOnPage}));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewFlavorForm />
      buttonText= "Return to Flavor List";
    } else {
      currentlyVisibleState = <FlavorList flavorList = {this.state.mainFlavorList} />
      buttonText= "Add Flavor";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default FlavorControl;