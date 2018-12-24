import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import startTabs from '../MainTabs/startMainTabs';
class AuthScreen extends Component {
  loginHandler = () => {
    startTabs();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Please Log In</Text>
        <Button title="Switch to login" />
        <View style={styles.inputContainer}>
          <TextInput placeholder="E-mail" style={styles.input} underlineColorAndroid="transparent" />
          <TextInput placeholder="Password" style={styles.input} underlineColorAndroid="transparent" />
          <TextInput placeholder="Confirm Password" style={styles.input} underlineColorAndroid="transparent"/>
        </View>
        <Button title="Login" onPress={this.loginHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#eee',
    padding: 5,
    margin: 8
  }
});
export default AuthScreen;
