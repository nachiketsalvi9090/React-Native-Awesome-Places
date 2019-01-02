import React, { Component } from 'react';
import {
  View,
  Button,
  StyleSheet,
  ImageBackground,
  Dimensions
} from 'react-native';
// Import Assets
import BackgroundImage from '../../assets/background.jpg';
// Import Component
import startTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
class AuthScreen extends Component {
  state = {
    stateStyles: {
      pwContainerDirection: 'column',
      pwContainerJustifyContent: 'flex-start',
      pwWrapperWidth: '100%'
    }
  };
  constructor(props) {
    super(props);
    Dimensions.addEventListener('change', dims => {
      this.setState({
        stateStyles: {
          pwContainerDirection:
            Dimensions.get('window').height > 500 ? 'column' : 'row',
          pwContainerJustifyContent:
            Dimensions.get('window').height > 500
              ? 'flex-start'
              : 'space-between',
          pwWrapperWidth: Dimensions.get('window').height > 500 ? '100%' : '45%'
        }
      });
    });
  }
  loginHandler = () => {
    startTabs();
  };
  onSwitchToLogin = () => {
    alert('onSwitchToLogin');
  };
  render() {
    let headingText = null;
    if (Dimensions.get('window').height > 500) {
      headingText = (
        <MainText>
          <HeadingText headingText="Please Login" />
        </MainText>
      );
    }
    return (
      <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          {headingText}
          <ButtonWithBackground
            color="#29aaf4"
            onPress={() => {
              alert('Switch To Login Pressed');
            }}
          >
            Switch To Login
          </ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="E-mail" style={styles.input} />
            <View
              style={{
                flexDirection: this.state.stateStyles.pwContainerDirection,
                justifyContent: this.state.stateStyles.pwContainerJustifyContent
              }}
            >
              <View
                style={{
                  width: this.state.stateStyles.pwWrapperWidth
                }}
              >
                <DefaultInput placeholder="Password" style={styles.input} />
              </View>
              <View
                style={{
                  width: this.state.stateStyles.pwWrapperWidth
                }}
              >
                <DefaultInput
                  placeholder="Confirm Password"
                  style={styles.input}
                />
              </View>
            </View>
          </View>
          <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>
            Login
          </ButtonWithBackground>
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
  backgroundImage: {
    width: '100%',
    flex: 1
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: '#eee',
    borderColor: '#ddd'
  },
  passwordContainer: {
    flexDirection: Dimensions.get('window').height > 500 ? 'column' : 'row',
    justifyContent: 'space-between'
  },
  passwordWrapper: {
    width: Dimensions.get('window').height > 500 ? '100%' : '45%'
  }
});
export default AuthScreen;
