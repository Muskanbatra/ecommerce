// PhoneInput.js
import React, { useState } from 'react';
import countriesData from '../data/Country.json';
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal,
    FlatList
} from 'react-native';

const PhoneInput = () => {
    console.log(countriesData, "jasgdhgsa")
    const [selectedCountry, setSelectedCountry] = useState(countriesData[0]);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setModalVisible(false);
    };

    return (
        <View>
            <TouchableOpacity style={styles.countrySelector} onPress={() => setModalVisible(true)}>
                <Text style={styles.countryText}>
                    {selectedCountry.country_flag} {selectedCountry.country_calling_code}
                </Text>
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                placeholder="Enter phone number"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
            >
                <View style={styles.modalContainer}>
                    <FlatList
                        data={countriesData}
                        keyExtractor={(item) => item.country_code}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleCountrySelect(item)}>
                                <Text style={styles.countryItem}>
                                    {item.country_flag} {item.country_name} ({item.country_calling_code})
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                    <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    countrySelector: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        color: 'black',
    },

    input: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        color: 'black',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        justifyContent: 'center',
        color: 'black',
    },
    countryItem: {
        padding: 10,
        fontSize: 16,
        color: 'black',
    },
    closeButton: {
        marginTop: 20,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
        color: 'black',
    },
    closeButtonText: {
        color: 'black',
        fontSize: 16,
    },
});

export default PhoneInput;
