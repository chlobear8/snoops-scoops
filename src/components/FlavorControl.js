import React from "react";
import NewFlavorForm from "./NewFlavorForm";
import FlavorList from "./FlavorList";
import FlavorDetail from "./FlavorDetail";
import EditFlavorForm from './EditFlavorForm';
import PurchaseFlavor from "./PurchaseFlavor";

class FlavorControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainFlavorList: [],
      selectedFlavor: null,
      editing: false,
      inventoried: false
    };
  }

  handleClick = () => {
    if (this.state.selectedFlavor != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedFlavor: null,
        editing: false,
        inventoried: false
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
    this.setState({editing: true});
  }

  handleEditingFlavor = (flavorToEdit) => {
    const editedMainFlavorList = this.state.mainFlavorList
                              .filter(flavor => flavor.id !== this.state.selectedFlavor.id)
                              .concat(flavorToEdit);
                              this.setState({
                                mainFlavorList:editedMainFlavorList,
                                editing: false,
                                selectedFlavor: null
                              });
  }

  handleInventoryTracker = (flavorToDecrease) => {
    const inventoriedMainFlavorToList = this.state.mainFlavorList
                                    .filter(flavor => flavor.id !== this.state.selectedFlavor.id)
                                    .concat(flavorToDecrease);
                                    this.setState({
                                      mainFlavorList: inventoriedMainFlavorToList,
                                      inventoried: false,
                                      selectedFlavor: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.inventoried) {
      currentlyVisibleState = (<PurchaseFlavor flavor = {this.state.selectedFlavor}
      initialInventoryCount={130} onPurchaseFlavor = {this.handleInventoryTracker} />
      );
      buttonText= "Return to Flavor List";
    } else if (this.state.editing) {
      currentlyVisibleState = <EditFlavorForm flavor = {this.state.selectedFlavor} onEditFlavor = {this.handleEditingFlavor} />
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