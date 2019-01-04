import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
// Import Assets
import BackgroundImage from '../../assets/background.jpg';
// Import Component
import startTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import validate from '../../utility/validation';
class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape',
    controls: {
      email: {
        value: '',
        valid: false,
        validationRule: {
          isEmail: true
        }
      },
      password: {
        value: '',
        valid: false,
        validationRule: {
          minLength: 6
        }
      },
      confirmPassword: {
        value: '',
        valid: false,
        validationRule: {
          equalTo: 'password'
        }
      }
    }
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener('change', this.updateStyle);
  }

  updateStyle = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? 'portrait' : 'landscape'
    });
  };

  loginHandler = () => {
    startTabs();
  };

  onSwitchToLogin = () => {
    alert('onSwitchToLogin');
  };

  updateInputState = (key, value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRule.equalTo) {
      const equalControl = this.state.controls[key].validationRule.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === 'password') {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid:
              key === 'password'
                ? validate(
                    prevState.controls.confirmPassword.value,
                    prevState.controls.confirmPassword.validationRule,
                    connectedValue
                  )
                : prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(
              value,
              prevState.controls[key].validationRule,
              connectedValue
            )
          }
        }
      };
    });
  };

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.updateStyle);
  }
  render() {
    let headingText = null;
    if (this.state.viewMode === 'portrait') {
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
            <DefaultInput
              placeholder="E-mail"
              style={styles.input}
              value={this.state.controls.email.value}
              onChangeText={value => this.updateInputState('email', value)}
            />
            <View
              style={
                this.state.viewMode === 'portrait'
                  ? styles.portraitPasswordContainer
                  : styles.landscapePasswordContainer
              }
            >
              <View
                style={
                  this.state.viewMode === 'portrait'
                    ? styles.portraitPasswordWrapper
                    : styles.landscapePasswordWrapper
                }
              >
                <DefaultInput
                  placeholder="Password"
                  style={styles.input}
                  value={this.state.controls.password.value}
                  onChangeText={value =>
                    this.updateInputState('password', value)
                  }
                />
              </View>
              <View
                style={
                  this.state.viewMode === 'portrait'
                    ? styles.portraitPasswordWrapper
                    : styles.landscapePasswordWrapper
                }
              >
                <DefaultInput
                  placeholder="Confirm Password"
                  style={styles.input}
                  value={this.state.controls.confirmPassword.value}
                  onChangeText={value =>
                    this.updateInputState('confirmPassword', value)
                  }
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
  landscapePasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  portraitPasswordContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  landscapePasswordWrapper: {
    width: '45%'
  },
  portraitPasswordWrapper: {
    width: '100%'
  }
});
export default AuthScreen;
