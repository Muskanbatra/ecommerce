import React, { RefObject } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Input } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { goBack, navigate } from '../../navigation/TopLevelNavigation';

const { width, height } = Dimensions.get('window');

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
      <StatusBar barStyle="light-content" backgroundColor="#90D6AA" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => goBack()} style={styles.backArrow}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
      </View>

      <View style={styles.profileImageContainer}>
        <Image
          source={{
            uri: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
          }}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.formContainer}>
        <Input
          ref={inputRef}
          placeholder="Full Name"
          keyboardType="default"
          inputStyle={styles.inputStyle}
          errorMessage={errorMessage}
          errorStyle={styles.errorStyle}
          onChangeText={onChangeText}
        />
        <Input
          placeholder="Email"
          keyboardType="email-address"
          inputStyle={styles.inputStyle}
          errorMessage={errorMessage}
          errorStyle={styles.errorStyle}
          onChangeText={onChangeText}
        />
        <Input
          placeholder="Phone Number"
          keyboardType="number-pad"
          inputStyle={styles.inputStyle}
          errorMessage={errorMessage}
          errorStyle={styles.errorStyle}
          onChangeText={onChangeText}
        />
        <Input
          placeholder="Address"
          keyboardType="default"
          inputStyle={styles.inputStyle}
          errorMessage={errorMessage}
          errorStyle={styles.errorStyle}
          onChangeText={onChangeText}
        />

        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90D6AA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    marginTop: height * 0.05,
  },
  backArrow: {
    padding: 5,
    marginRight: 10,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
    textAlign: 'center',
    marginRight: 25,
  },
  profileImageContainer: {
    marginTop: height * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height * 0.05,
  },
  profileImage: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: width * 0.125,
    marginTop: 17,
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: width * 0.06,
    paddingTop: height * 0.06,
  },
  inputStyle: {
    color: 'black',
  },
  errorStyle: {
    textAlign: 'center',
  },
  loginButton: {
    height: 50,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
});

export default ProfileForm;
