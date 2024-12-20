import {SafeAreaView, StatusBar} from 'react-native';
import React, {createRef, useState} from 'react';
import RegisterForm from '../../features/auth/Register';

interface RegisterState {
  phoneNumber: string;
  errorMessage: string;
  isLoading: boolean;
}

const Register: React.FC = () => {
  const inputRef = createRef<any>();
  const [state, setState] = useState<RegisterState>({
    phoneNumber: '',
    errorMessage: '',
    isLoading: false,
  });

  const handleProfile = () => {};

  const onChangeText = (text: string): void => {
    setState(prev => ({...prev, phoneNumber: text, errorMessage: ''}));
  };

  const {errorMessage} = state;

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <RegisterForm
        inputRef={inputRef}
        errorMessage={errorMessage}
        onChangeText={onChangeText}
        handleLogin={handleProfile}
      />
    </SafeAreaView>
  );
};

export default Register;
