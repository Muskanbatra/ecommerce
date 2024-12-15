import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {goBack, navigate} from '../../navigation/TopLevelNavigation';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
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

      {/* Input Section */}
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

        {/* Sign In Button */}
        <TouchableOpacity style={styles.signInButton}>
          <Text
            style={styles.buttonText}
            onPress={() => {
              navigate('home');
            }}>
            Sign In
          </Text>
        </TouchableOpacity>

        {/* Continue Without Login */}
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
    paddingHorizontal: 25,
    paddingTop: 12,
    paddingBottom: 14,
  },
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
  signInTitle: {
    fontSize: 34,
    fontWeight: '700',
    color: '#000',
    marginBottom: 10,
    marginTop: 20,
  },
  welcomeDescription: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 22,
    marginBottom: 25,
  },
  inputContainer: {
    marginTop: 30,
  },
  inputField: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 25,
    marginBottom: 15,
    fontSize: 16,
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#000',
    fontWeight: '600',
    marginTop: 10,
  },
  signInButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 40,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  loginMobile: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginTop: 40,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  register: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  footer: {
    marginTop: 180,
    alignItems: 'center',
  },
  footerText: {
    color: 'black',
    textAlign: 'center',
  },
});

export default SignInScreen;
