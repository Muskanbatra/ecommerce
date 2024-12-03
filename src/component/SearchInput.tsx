import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchInput = ({ searchQuery, setSearchQuery, placeholder = "Search" }: any) => {
  return (
    <View style={styles.searchContainer}>
      <Icon name="search" size={20} color="gray" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder={placeholder}
        placeholderTextColor="gray"
      />
      {searchQuery ? (
        <TouchableOpacity onPress={() => setSearchQuery('')}>
          <Icon name="close" size={20} color="gray" style={styles.clearIcon} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 40,
    width: '100%',
  },
  iconStyle: {
    marginRight: 10,
  },
  inputStyle: {
    flex: 1,
    paddingVertical: 0,
    fontSize: 14,
    color: "black"
  },
  clearIcon: {
    paddingLeft: 10,
  },
});

export default SearchInput;
