import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { goBack, navigate } from '../../navigation/TopLevelNavigation';

const { width, height } = Dimensions.get('window');

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#90D6AA'} />
      <View style={styles.signInContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text
            style={styles.register}
            onPress={() => {
              navigate('register');
            }}>
            Register
          </Text>
        </View>
        <Text style={styles.signInTitle}>Sign In</Text>
        <Text style={styles.welcomeDescription}>
          Welcome back! Sign in to unlock exclusive features and enjoy
          effortless shopping.
        </Text>
      </View>
      <View style={styles.welcomeContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Username"
            style={styles.inputField}
            placeholderTextColor="#bdbdbd"
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.inputField}
            placeholderTextColor="#bdbdbd"
          />
          <TouchableOpacity>
            <Text
              style={styles.forgotPassword}
              onPress={() => {
                navigate('forgot');
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.signInButton}>
          <Text
            style={styles.buttonText}
            onPress={() => {
              navigate('home');
            }}>
            Sign In
          </Text>
        </TouchableOpacity>
        <Text
          style={styles.loginMobile}
          onPress={() => {
            navigate('Login');
          }}>
          Log in with mobile number
        </Text>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            All rights reserved. © Jinrai Technology
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90D6AA',
  },
  signInContainer: {
    paddingHorizontal: width * 0.06,
    paddingTop: height * 0.02,
    paddingBottom: height * 0.02,
  },
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: width * 0.06,
    paddingTop: height * 0.03,
  },
  signInTitle: {
    fontSize: 34,
    fontWeight: '700',
    color: '#000',
    marginBottom: height * 0.01,
    marginTop: height * 0.02,
  },
  welcomeDescription: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    lineHeight: height * 0.03,
    marginBottom: height * 0.03,
  },
  inputContainer: {
    marginTop: height * 0.03,
  },
  inputField: {
    backgroundColor: '#F5F5F5',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.04,
    borderRadius: 25,
    marginBottom: height * 0.02,
    fontSize: width * 0.045,
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#000',
    fontWeight: '600',
    marginTop: height * 0.01,
  },
  signInButton: {
    backgroundColor: '#000',
    paddingVertical: height * 0.02,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: height * 0.05,
    elevation: 3,
  },
  buttonText: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  loginMobile: {
    fontSize: width * 0.04,
    color: '#333',
    textAlign: 'center',
    marginTop: height * 0.05,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  register: {
    fontSize: width * 0.045,
    fontWeight: '600',
    color: '#000',
  },
  footer: {
    marginTop: height * 0.2,
    alignItems: 'center',
  },
  footerText: {
    color: 'black',
    textAlign: 'center',
    fontSize: width * 0.035,
  },
});

export default SignInScreen;
