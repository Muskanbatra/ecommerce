import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {navigate} from '../../navigation/TopLevelNavigation';
import fashionData from '../../data/FashionData.json';

const Fashion = () => {
  const renderItem = ({item}: any) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => item.title === 'Dresses' && navigate('shop_fashion')}>
      <View style={styles.circle}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      {/* Header */}
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigate('home')}>
            <FontAwesome6 name="arrow-left" size={28} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Fashion</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <FontAwesome
            name="bell-o"
            size={24}
            color="white"
            style={styles.icon}
          />
          <Ionicons
            name="cart-outline"
            size={24}
            color="white"
            style={styles.icon}
          />
        </View>
      </View>

      {/* Content */}
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/thumbnails/002/006/774/small/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg',
          }}
          style={styles.banner}
        />
        <FlatList
          data={fashionData}
          numColumns={3}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          columnWrapperStyle={{justifyContent: 'space-between'}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#90D6AA',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  icon: {
    marginLeft: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  banner: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: 'pink',
  },
  image: {
    width: 92,
    height: 92,
    borderRadius: 45,
  },
  price: {
    color: '#ffffff',
    fontWeight: 'bold',
    backgroundColor: '#90D6AA',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 5,
    textAlign: 'center',
    marginTop: -20,
  },
  title: {
    fontSize: 14,
    color: '#333',
  },
});

export default Fashion;
