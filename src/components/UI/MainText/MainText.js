import React from "react";
import { Text, StyleSheet } from "react-native";
const mainText = props => <Text style={styles.MainText}>{props.children}</Text>;

const styles = StyleSheet.create({
  MainText: {
    color: "black"
  }
});

export default mainText;
