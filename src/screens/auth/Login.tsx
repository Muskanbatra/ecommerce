import React, { createRef, useState } from 'react';
import LoginForm from '../../features/auth/LoginForm';
import { Provider as PaperProvider } from 'react-native-paper';
import { navigate } from '../../navigation/TopLevelNavigation';
import { StatusBar } from 'react-native';

interface LoginState {
    phoneNumber: string;
    errorMessage: string;
    isLoading: boolean;
    country_flag: string;
    country_calling_code: string;
}

const LoginScreen: React.FC = () => {
    const inputRef = createRef<any>();
    const [state, setState] = useState<LoginState>({
        phoneNumber: '',
        errorMessage: '',
        isLoading: false,
        country_flag: '🇮🇳',
        country_calling_code: '+91',
    });

    const validation = (): boolean => {
        const { phoneNumber } = state;
        const numericRegex = /^\d{10}$/;

        if (phoneNumber.length === 0) {
            setState((prev) => ({ ...prev, errorMessage: 'Please enter phone number' }));
            inputRef.current?.shake();
            return false;
        } else if (phoneNumber.length !== 10) {
            setState((prev) => ({ ...prev, errorMessage: 'Please enter correct phone number' }));
            inputRef.current?.shake();
            return false;
        } else if (!numericRegex.test(phoneNumber)) {
            setState((prev) => ({ ...prev, errorMessage: 'Please enter numeric value' }));
            inputRef.current?.shake();
            return false;
        } else {
            return true;
        }
    };

    const handleLogin = () => {
        if (validation()) {
            // Handle successful login logic
        }
        navigate("otp")
    };

    const onChangeText = (text: string): void => {
        setState((prev) => ({ ...prev, phoneNumber: text, errorMessage: '' }));
    };

    const { country_flag, errorMessage, country_calling_code } = state;

    return (
        <PaperProvider>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={"white"}
            />
            <LoginForm
                inputRef={inputRef}
                errorMessage={errorMessage}
                onChangeText={onChangeText}
                country_flag={country_flag}
                country_calling_code={country_calling_code}
                handleLogin={handleLogin}
            />
        </PaperProvider>
    );
};

export default LoginScreen;


