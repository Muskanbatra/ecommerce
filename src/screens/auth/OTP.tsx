import React, {useRef, useState} from 'react';
import CustomButton from '../../component/CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {goBack, navigate} from '../../navigation/TopLevelNavigation';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

const OTP: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const handleInputChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }

    if (!value && index > 0) {
      inputRefs[index - 1].current?.focus();
    }

    setOtp(newOtp);
  };

  const handleOTP = () => {
    console.log('Entered OTP:', otp.join(''));
    navigate('profile');
  };

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.instruction}>
          Please enter the OTP sent to your phone number.
        </Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              value={digit}
              onChangeText={value => handleInputChange(value, index)}
              keyboardType="numeric"
              maxLength={1}
              style={styles.input}
              ref={inputRefs[index]}
            />
          ))}
        </View>

        <CustomButton title="Verify OTP" onPress={handleOTP} />

        <TouchableOpacity onPress={() => console.log('Resend OTP pressed')}>
          <Text style={styles.resendText}>Resend OTP</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            All rights reserved. © Jinrai Technology
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  instruction: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 20,
    color: 'black',
  },
  resendText: {
    color: 'black',
    marginTop: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  footerText: {
    color: 'black',
    textAlign: 'center',
  },
});

export default OTP;
