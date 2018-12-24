import React, { Component } from 'react';
import { View, Button, StyleSheet, ImageBackground } from 'react-native';
// Import Assets
import BackgroundImage from '../../assets/background.jpg'
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
      <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
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
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage:{
    width:"100%",
    flex:1
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
