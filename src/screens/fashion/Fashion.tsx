import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { navigate } from '../../navigation/TopLevelNavigation';
import fashionData from '../../data/FashionData.json';

const { width, height } = Dimensions.get('window');

const Fashion = () => {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigate('shop_fashion')}>
      <View style={styles.circle}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <Image
      source={{
        uri: 'https://static.vecteezy.com/system/resources/thumbnails/002/006/774/small/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg',
      }}
      style={styles.banner}
    />
  );

  return (
    <>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigate('home')}>
            <FontAwesome6 name="arrow-left" size={width * 0.08} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Fashion</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <FontAwesome
            name="bell-o"
            size={width * 0.07}
            color="white"
            style={styles.icon}
          />
          <Ionicons
            name="cart-outline"
            size={width * 0.07}
            color="white"
            style={styles.icon}
          />
        </View>
      </View>

      {/* Content */}
      <FlatList
        data={fashionData}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.contentContainer}
      />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: width * 0.04,
    backgroundColor: '#90D6AA',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  icon: {
    marginLeft: width * 0.04,
  },
  contentContainer: {
    paddingBottom: height * 0.03,
  },
  banner: {
    width: '100%',
    height: height * 0.2,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10,
    marginTop: 3,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: width * 0.025,
    marginBottom: height * 0.02,
  },
  circle: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: width * 0.125,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.01,
    backgroundColor: 'pink',
  },
  image: {
    width: width * 0.23,
    height: width * 0.23,
    borderRadius: width * 0.115,
  },
  price: {
    color: '#ffffff',
    fontWeight: 'bold',
    backgroundColor: '#90D6AA',
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.01,
    borderRadius: 5,
    textAlign: 'center',
    marginTop: -height * 0.03,
  },
  title: {
    fontSize: width * 0.035,
    color: '#333',
  },
});

export default Fashion;
