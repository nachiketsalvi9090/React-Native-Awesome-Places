import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  PlatformÎ,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

//Import Action Creator
import { deletePlace } from '../../store/actions/index';
class PlaceDetails extends Component {
  placeDeleteHandler = () => {
    this.props.onPlaceDelete(this.props.selectedPlace.key);
    this.props.navigator.pop();
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeDetailsContainer}>
          <Image
            style={styles.placeImage}
            source={this.props.selectedPlace.image}
          />
          <View style={styles.placeInfoContainer}>
            <Text>{this.props.selectedPlace.name}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <View style={styles.viewIcon}>
                <Icon
                  size={25}
                  name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                  color="red"
                  onPress={this.placeDeleteHandler}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22,
    flexDirection: 'column'
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  placeDetailsContainer: {
    flexDirection: 'column'
  },
  placeImage: {
    width: '100%',
    height: 150
  },
  placeInfoContainer: {
    padding: 15,
    display: 'flex',
    flexDirection: 'row'
  },
  favourite: {
    marginLeft: 15
  },
  viewIcon: {
    alignItems: 'center'
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onPlaceDelete: key => dispatch(deletePlace(key))
  };
};
export default connect(null, mapDispatchToProps)(PlaceDetails);
