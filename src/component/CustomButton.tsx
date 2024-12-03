import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  loading,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        {loading && <ActivityIndicator color={"white"} />}
        <Text style={[styles.title, { fontFamily: "Bold" }]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#90D6AA",
    width: "100%",
  },
  button: {
    width: "100%",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
    fontWeight: "600"
  },
});

export default CustomButton;
