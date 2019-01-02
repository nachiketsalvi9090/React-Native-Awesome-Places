import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

//Import Component here
import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: 'orange'
  };
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({
          animated: true,
          side: 'left'
        });
      }
    }
  };
  onItemSelectHandler = key => {
    const selectedPlace = this.props.places.find(place => {
      return place.key === key;
    });
    this.props.navigator.push({
      screen: 'awesome-places.PlaceDetail',
      title: selectedPlace.name,
      passProps: {
        selectedPlace: selectedPlace
      }
    });
  };
  render() {
    return (
      <View>
        <PlaceList
          places={this.props.places}
          onItemSelect={this.onItemSelectHandler}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};
export default connect(mapStateToProps)(FindPlaceScreen);
