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

const ForgotPasswordScreen = () => {
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
        <Text style={styles.forgotPasswordTitle}>Forgot Password</Text>
        <Text style={styles.forgotPasswordDescription}>
          Enter your email or username to reset your password.
        </Text>
      </View>

      {/* Input Section */}
      <View style={styles.welcomeContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Username or Email"
            style={styles.inputField}
            placeholderTextColor="#bdbdbd"
          />
        </View>

        {/* Reset Password Button */}
        <TouchableOpacity style={styles.signInButton}>
          <Text
            style={styles.buttonText}
            onPress={() => {
              // Implement the logic for sending a reset link
              navigate('resetPassword');
            }}>
            Reset Password
          </Text>
        </TouchableOpacity>

        {/* Back to Sign In */}
        <Text
          style={styles.backToSignIn}
          onPress={() => {
            navigate('sign_in');
          }}>
          Back to Sign In
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
    paddingTop: 18,
    paddingBottom: 14,
  },
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
  forgotPasswordTitle: {
    fontSize: 34,
    fontWeight: '700',
    color: '#000',
    marginBottom: 10,
    marginTop: 32,
  },
  forgotPasswordDescription: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 22,
    marginBottom: 29,
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
  backToSignIn: {
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

export default ForgotPasswordScreen;
