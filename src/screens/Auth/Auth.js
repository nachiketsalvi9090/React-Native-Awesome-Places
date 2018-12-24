import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
// Import Component
import startTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
class AuthScreen extends Component {
  loginHandler = () => {
    startTabs();
  };
  render() {
    return (
      <View style={styles.container}>
        <MainText>
          <HeadingText headingText="Please Login" />
        </MainText>
        <Button title="Switch to login" />
        <View style={styles.inputContainer}>
          <DefaultInput placeholder="E-mail" style={styles.input} />
          <DefaultInput placeholder="Password" style={styles.input} />
          <DefaultInput placeholder="Confirm Password" style={styles.input} />
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
    backgroundColor: '#eee',
    borderColor: '#ddd'
  }
});
export default AuthScreen;
