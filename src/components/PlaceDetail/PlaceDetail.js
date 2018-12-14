import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const placeDetails = props => {
  let modelContent = null;
  if (props.selectedPlace) {
    modelContent = ( 
      <View style={styles.modelPlaceDetailsContainer}>
        <Image style={styles.placeImage} source={props.selectedPlace.image} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }
  return (
    <Modal visible={props.selectedPlace !==null} 
     onModelClose={props.onModelClose}
    animationType={"fade"}>
      <View style={styles.modelContainer}>
        <View style={styles.modelButtonContainer}>
          {/* <Button title={"Delete"} color={"red"} onPress={props.onModelDelete}/> */}
          <TouchableOpacity>
            <View style={styles.viewIcon}>
            <Icon size={30} name="ios-trash" color="red" onPress={props.onModelDelete}/>
            </View>
          </TouchableOpacity>
          <Button title={"Close"} onPress={props.onModelClose}/>
        </View>
        {modelContent}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    modelContainer:{
        margin:22,
        flexDirection: "column"
    },
    modelButtonContainer:{
        flexDirection: "row"
    },
    modelPlaceDetailsContainer:{
      flexDirection:"column"
    },
    placeImage:{
      width: "100%",
      height:150
    },
    placeName:{
    padding: 15,
    fontWeight:"bold",
    fontSize: 30,
    display:"flex",
    textAlign:"center"
    },
    viewIcon: {
      alignItems: "center"
    }
});
export default placeDetails;
