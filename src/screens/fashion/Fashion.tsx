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
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.circle}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', gap: 20}}>
          <TouchableOpacity>
            <FontAwesome6
              name="arrow-left"
              size={28}
              color="white"
              onPress={() => {
                navigate('home');
              }}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Fashion</Text>
        </View>
        <View style={styles.headerIcons}>
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
          keyExtractor={item => item.id}
          renderItem={renderItem}
          columnWrapperStyle={{justifyContent: 'space-between'}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  banner: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10,
  },
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
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  image: {
    width: 92,
    height: 92,
    borderRadius: 45,
  },
  price: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 4,
    backgroundColor: '#90D6AA',
    paddingHorizontal: 9,
    paddingVertical: 5,
    width: 95,
    marginTop: -20,
    borderRadius: 5,
    textAlign: 'center',
  },
  title: {
    fontSize: 14,
    color: '#333',
  },
});

export default Fashion;
