import { SafeAreaView, StatusBar } from 'react-native';
import React, { createRef, useState } from 'react';
import ProfileForm from '../../features/auth/ProfileForm';
import { navigate } from '../../navigation/TopLevelNavigation';

interface ProfileState {
    phoneNumber: string;
    errorMessage: string;
    isLoading: boolean;
}

const Profile: React.FC = () => {
    const inputRef = createRef<any>();
    const [state, setState] = useState<ProfileState>({
        phoneNumber: '',
        errorMessage: '',
        isLoading: false
    });

    const handleProfile = () => {
        navigate('home')
    }

    const onChangeText = (text: string): void => {
        setState((prev) => ({ ...prev, phoneNumber: text, errorMessage: '' }));
    };

    const { errorMessage } = state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} >
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={"white"}
            />
            <ProfileForm
                inputRef={inputRef}
                errorMessage={errorMessage}
                onChangeText={onChangeText}
                handleLogin={handleProfile} />
        </SafeAreaView>
    );
};

export default Profile;


