import React, { RefObject } from 'react';
import { Fonts, Sizes } from '../../assets/style';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';
import { Input } from '@rneui/themed';
import { goBack } from '../../navigation/TopLevelNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ProfileFormProps {
    handleLogin: () => void;
    inputRef: RefObject<any>;
    errorMessage: string;
    onChangeText: (text: string) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({
    handleLogin,
    inputRef,
    errorMessage,
    onChangeText,
}) => {
    return (
        <View style={styles.container}>

            <View style={styles.back_arrow}>
                <View>
                    <TouchableOpacity onPress={() => goBack()}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>Profile</Text>
            </View>

            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png' }} // Replace with your profile image URL
                    style={styles.profileImage}
                />
            </View>

            <Input
                ref={inputRef}
                placeholder="Full Name"
                keyboardType="default"
                inputStyle={{ ...Fonts.black16RobotoRegular, color: "black" }}
                errorMessage={errorMessage}
                errorStyle={{ textAlign: 'center' }}
                maxLength={10}
                onChangeText={onChangeText}
            />
            <Input
                placeholder="Email"
                keyboardType="email-address"
                inputStyle={{ ...Fonts.black16RobotoRegular, color: "black" }}
                errorMessage={errorMessage}
                errorStyle={{ textAlign: 'center' }}
                maxLength={10}
                onChangeText={onChangeText}
            />
            <Input
                placeholder="Phone Number"
                keyboardType="number-pad"
                inputStyle={{ ...Fonts.black16RobotoRegular, color: "black" }}
                errorMessage={errorMessage}
                errorStyle={{ textAlign: 'center' }}
                maxLength={10}
                onChangeText={onChangeText}
            />
            <Input
                placeholder="Address"
                keyboardType="default"
                inputStyle={{ ...Fonts.black16RobotoRegular, color: "black" }}
                errorMessage={errorMessage}
                errorStyle={{ textAlign: 'center' }}
                onChangeText={onChangeText}
            />
            <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 10,
    },
    icon: {
        marginHorizontal: 10,
        backgroundColor: "white",
    },
    header: {
        paddingBottom: Sizes.fixPadding * 2,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#90D6AA",
        textAlign: "center"
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
    back_arrow: {
        paddingTop: Sizes.fixPadding,
        display: "flex",
        justifyContent: "center"
    }
});

export default ProfileForm
