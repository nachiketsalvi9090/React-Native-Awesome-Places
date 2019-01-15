import React, { Component } from "react";
import { View, Image, Button, StyleSheet } from "react-native";

// Import Assets
import imagePlaceHolder from "../../assets/place.jpg";

class PickImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeHolder}>
          <Image source={imagePlaceHolder} style={styles.previewImage} />
        </View>
        <View style={styles.button}>
          <Button title="Pick Image" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  button: {
    margin: 8
  },
  placeHolder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 180
  },
  previewImage: {
    width: "100%",
    height: "100%"
  }
});
export default PickImage;
