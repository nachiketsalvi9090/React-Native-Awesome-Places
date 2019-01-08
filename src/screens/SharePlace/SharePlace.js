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

import validate from '../../utility/validation';
class SharePlaceScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: 'orange'
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  state = {
    controls: {
      placeName: {
        value: '',
        valid: false,
        touched: false,
        validationRule: {
          notEmpty: true
        }
      }
    }
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
    if (this.state.controls.placeName.value.trim() !== '') {
      this.props.onAddPlace(this.state.controls.placeName.value);
    }
  };

  placeNameChangeHadler = val => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          placeName: {
            ...prevState.controls.placeName,
            value: val,
            valid: validate(val, prevState.controls.placeName.validationRule),
            touched: true
          }
        }
      };
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
            placeData={this.state.controls.placeName}
            onChangeText={this.placeNameChangeHadler}
          />
          <View style={styles.button}>
            <Button
              title="Share the place"
              onPress={this.onPlaceAddedHandler}
              disabled={!this.state.controls.placeName.valid}
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
