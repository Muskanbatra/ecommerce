import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-shop-icon-135610500.jpg',
          }}
          style={styles.logo}
        />
      </View>

      {/* Welcome Section */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitle}>Welcome</Text>
        <Text style={styles.welcomeDescription}>
          Discover a seamless shopping experience with our app. Explore top
          deals, exclusive offers, and a wide variety of products just a click
          away.
        </Text>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={[styles.buttonText, styles.signUpText]}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.withoutLogin}>Continue without login</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 280,
    height: 160,
  },
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#90D6AA',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
  welcomeTitle: {
    fontSize: 34,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
    marginTop: 40,
  },
  welcomeDescription: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 22,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  signInButton: {
    flex: 1,
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 30,
    marginRight: 10,
    alignItems: 'center',
    elevation: 3,
  },
  signUpButton: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 30,
    marginLeft: 10,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  signUpText: {
    color: '#000',
  },
  withoutLogin: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginTop: 40,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default Welcome;
