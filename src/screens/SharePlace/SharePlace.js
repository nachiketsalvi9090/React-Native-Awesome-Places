import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

//Import Component Here
import PlaceInput from '../../components/PlaceInput/PlaceInput';

//Import action creator
import { addPlace } from '../../store/actions/index';

class SharePlaceScreen extends Component {
  onPlaceAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };
  render() {
    return (
      <View>
        <PlaceInput onPlaceAdded={this.onPlaceAddedHandler} />
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => {
      dispatch(addPlace(placeName));
    }
  };
};
export default connect(null, mapDispatchToProps)(SharePlaceScreen);
