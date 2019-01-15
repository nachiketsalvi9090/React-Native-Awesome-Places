import React from "react";
import { Text, StyleSheet } from "react-native";

const headingText = props => (
  <Text style={[styles.textHeading, props.style]} {...props}>
    {props.headingText}
  </Text>
);
styles = StyleSheet.create({
  textHeading: {
    fontSize: 28,
    fontWeight: "bold"
  }
});
export default headingText;
