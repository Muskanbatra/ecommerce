import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchInput from '../../component/SearchInput';
import products from '../../data/FashionShop.json';
import {navigate} from '../../navigation/TopLevelNavigation';

const FashionShop = () => {
  const renderStars = (rating: any) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesome
          key={i}
          name={
            i <= Math.floor(rating)
              ? 'star'
              : i - rating < 1
              ? 'star-half-o'
              : 'star-o'
          }
          size={14}
          color="#FFD700" // Gold color
          style={{marginRight: 2}}
        />,
      );
    }
    return <View style={styles.starsContainer}>{stars}</View>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#90D6AA'} />

      {/* Header */}
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity>
            <FontAwesome6
              name="arrow-left"
              size={28}
              color="white"
              onPress={() => {
                navigate('fashion');
              }}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Fashion</Text>
        </View>
        <View style={styles.headerIcons}>
          <FontAwesome name="bell-o" size={24} color="white" />
          <Ionicons
            name="cart-outline"
            size={24}
            color="white"
            style={{marginLeft: 15}}
          />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <SearchInput />
      </View>

      {/* Products Grid */}
      <FlatList
        data={products}
        renderItem={({item}) => (
          <View key={item.id} style={styles.productCard}>
            {/* Product Image */}
            <Image source={{uri: item.image}} style={styles.productImage} />

            {/* Product Details */}
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>

              <View style={styles.box}>
                <Text style={styles.productOldPrice}>{item.oldPrice}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
              </View>
            </View>

            {/* Review Stars */}

            <View style={styles.box2}>
              {renderStars(item.rating)}

              <TouchableOpacity
                style={styles.viewDetailsButton}
                onPress={() => navigate('details', {id: item.id})}>
                <Text style={styles.viewDetailsText}>View</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.buyNowButton}>
              <Text style={styles.buyNowText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 5,
    backgroundColor: '#90D6AA',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  searchContainer: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: '#90D6AA',
    marginBottom: 10,
  },
  productCard: {
    backgroundColor: 'white',
    width: '48%',
    borderRadius: 8,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    paddingHorizontal: 7,
  },
  productImage: {
    width: '100%',
    height: 190,
    borderRadius: 8,
    objectFit:'cover'
  },
  productDetails: {
    padding: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  productPrice: {
    color: '#90D6AA',
    fontWeight: 'bold',
    fontSize: 16,
  },
  viewDetailsButton: {
    backgroundColor: 'transparent',
  },
  viewDetailsText: {
    color: 'pink',
    textAlign: 'center',
    fontSize: 12,
    textDecorationLine: 'underline',
  },

  buyNowButton: {
    backgroundColor: '#90D6AA',
    borderRadius: 5,
    paddingVertical: 6,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  buyNowText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  productOldPrice: {
    textDecorationLine: 'line-through',
    color: 'gray',
    fontSize: 12,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  box2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
    paddingLeft: 10,
    paddingRight: 15,
    marginBottom: 10,
  },
});

export default FashionShop;
