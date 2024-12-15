import React, {RefObject} from 'react';
import {Colors, Fonts, Sizes} from '../../assets/style';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {goBack, navigate} from '../../navigation/TopLevelNavigation';
import {Input} from '@rneui/themed';

interface RegisterFormProps {
  handleLogin: () => void;
  inputRef: RefObject<any>;
  errorMessage: string;
  onChangeText: (text: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  handleLogin,
  inputRef,
  errorMessage,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.title}>Sign Up</Text>
      </View>

      <Input
        ref={inputRef}
        inputContainerStyle={styles.inputContainer}
        placeholder="Full Name"
        keyboardType="default"
        inputStyle={{...Fonts.black16RobotoRegular, color: 'black'}}
        errorMessage={errorMessage}
        errorStyle={{textAlign: 'center'}}
        maxLength={10}
        onChangeText={onChangeText}
      />
      <Input
        ref={inputRef}
        inputContainerStyle={styles.inputContainer}
        placeholder="Email"
        keyboardType="email-address"
        inputStyle={{...Fonts.black16RobotoRegular, color: 'black'}}
        errorMessage={errorMessage}
        errorStyle={{textAlign: 'center'}}
        maxLength={10}
        onChangeText={onChangeText}
      />

      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>Old member?</Text>
      <TouchableOpacity onPress={() => navigate('sign_in')}>
        <Text style={styles.signupLink}>Login</Text>
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <TouchableWithoutFeedback onPress={() => console.log('Google Pressed')}>
          <View style={styles.circle}>
            <Icon name="google" size={20} color="#DB4437" style={styles.icon} />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => console.log('Facebook Pressed')}>
          <View style={styles.circle}>
            <Icon
              name="facebook"
              size={20}
              color="#4267B2"
              style={styles.icon}
            />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => console.log('LinkedIn Pressed')}>
          <View style={styles.circle}>
            <Icon
              name="linkedin"
              size={20}
              color="#0077B5"
              style={styles.icon}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <Text style={{textAlign: 'center', color: 'black'}}>
        Sign in with another account
      </Text>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          All rights reserved. © Jinrai Technologies
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
    gap: 20,
  },
  icon: {
    marginHorizontal: 10,
    backgroundColor: 'white',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  header: {
    marginBottom: 20,
    marginLeft: 10,
    paddingTop: Sizes.fixPadding * 12,
    paddingBottom: Sizes.fixPadding * 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#90D6AA',
    textAlign: 'center',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.grayLight,
    borderRadius: Sizes.fixPadding * 1,
    paddingHorizontal: Sizes.fixPadding,
  },
  loginButton: {
    height: 50,
    backgroundColor: '#90D6AA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    color: 'black',
  },
  signupLink: {
    color: '#90D6AA',
    fontWeight: 'bold',
  },
  footer: {
    top: 100,
    alignItems: 'center',
    zIndex: -1,
  },
  footerText: {
    color: 'black',
    textAlign: 'center',
  },
});

export default RegisterForm;
