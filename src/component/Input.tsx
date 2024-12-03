import { TextInput, TextInputProps, KeyboardTypeOptions, StyleSheet } from "react-native";
import React from "react";

interface LoginInputProps extends TextInputProps {
    placeholder: string;
    keyboardType?: KeyboardTypeOptions;
}

const Input: React.FC<LoginInputProps> = ({ placeholder, ...rest }) => {
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor="#d2d2d2"
            style={styles.input}
            {...rest}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 14,
        borderBottomWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 20,
        fontFamily: 'Regular',
        width:"100%"
    },
});

export default Input;
