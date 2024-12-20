import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { navigate } from '../../navigation/TopLevelNavigation';

const { width, height } = Dimensions.get('window');

const Welcome = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-shop-icon-135610500.jpg',
          }}
          style={styles.logo}
        />
      </View>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitle}>Welcome</Text>
        <Text style={styles.welcomeDescription}>
          Discover a seamless shopping experience with our app. Explore top
          deals, exclusive offers, and a wide variety of products just a click
          away.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => {
              navigate('sign_in');
            }}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => {
              navigate('register');
            }}>
            <Text style={[styles.buttonText, styles.signUpText]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={styles.withoutLogin}
          onPress={() => {
            navigate('home');
          }}>
          Continue without login
        </Text>
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
    marginTop: height * 0.1,
  },
  logo: {
    width: width * 0.7,
    height: height * 0.2,
  },
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#90D6AA',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: width * 0.06,
    paddingTop: height * 0.05,
    paddingBottom: height * 0.1,
  },
  welcomeTitle: {
    fontSize: width * 0.09,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  welcomeDescription: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
    lineHeight: width * 0.05,
    marginBottom: height * 0.05,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.05,
  },
  signInButton: {
    flex: 1,
    backgroundColor: '#000',
    paddingVertical: height * 0.02,
    borderRadius: 30,
    marginRight: 10,
    alignItems: 'center',
    elevation: 3,
  },
  signUpButton: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: height * 0.02,
    borderRadius: 30,
    marginLeft: 10,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  signUpText: {
    color: '#000',
  },
  withoutLogin: {
    fontSize: width * 0.035,
    color: '#333',
    textAlign: 'center',
    marginTop: height * 0.05,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default Welcome;
