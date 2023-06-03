import React from "react";
import NewFlavorForm from "./NewFlavorForm";
import FlavorList from "./FlavorList";
import FlavorDetail from "./FlavorDetail";
import EditFlavorForm from './EditFlavorForm';

class FlavorControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainFlavorList: [],
      selectedFlavor: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedFlavor != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedFlavor: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewFlavor = (newFlavor) => {
    const newMainFlavorList = this.state.mainFlavorList.concat(newFlavor);
    this.setState({mainFlavorList: newMainFlavorList,
                                  formVisibleOnPage: false});
  }

  handleChangingSelectedFlavor = (id) => {
    const selectedFlavor = this.state.mainFlavorList.filter(flavor => flavor.id === id)[0];
    this.setState({selectedFlavor: selectedFlavor});
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditFlavorForm flavor = {this.state.selectedFlavor} />
      buttonText= "Return to Flavor List";
    } else if (this.state.selectedFlavor != null) {
      currentlyVisibleState = <FlavorDetail flavor = {this.state.selectedFlavor} onClickingEdit = {this.handleEditClick} />
      buttonText= "Return to Flavors List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewFlavorForm onNewFlavorCreation = {this.handleAddingNewFlavor} />
      buttonText= "Return to Flavor List";
    } else {
      currentlyVisibleState = <FlavorList flavorList = {this.state.mainFlavorList} onFlavorSelection = {this.handleChangingSelectedFlavor} />
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