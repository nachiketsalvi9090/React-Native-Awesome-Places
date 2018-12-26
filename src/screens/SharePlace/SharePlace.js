import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';

//Import Component Here
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

//Import action creator
import { addPlace } from '../../store/actions/index';

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  state = {
    placeName: ''
  };

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

  onPlaceAddedHandler = () => {
    if (this.state.placeName.trim() !== '') {
      this.props.onAddPlace(this.state.placeName);
      this.setState({
        placeName: ''
      });
    }
  };

  placeNameChangeHadler = val => {
    this.setState({
      placeName: val
    });
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText headingText="Share Place With us!" />
          </MainText>
          <PickImage />
          <PickLocation />
          <PlaceInput
            placeName={this.state.placeName}
            onChangeText={this.placeNameChangeHadler}
          />
          <View style={styles.button}>
            <Button
              title="Share the place"
              onPress={this.onPlaceAddedHandler}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    margin: 8
  }
});
const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => {
      dispatch(addPlace(placeName));
    }
  };
};
export default connect(null, mapDispatchToProps)(SharePlaceScreen);
