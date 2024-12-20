import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchInput from '../../component/SearchInput';
import {navigate} from '../../navigation/TopLevelNavigation';

const categories = [
  {name: 'Electronic', icon: 'phone-portrait-outline'},
  {name: 'Fashion', icon: 'shirt-outline'},
  {name: 'F&B', icon: 'fast-food-outline'},
  {name: 'Beauty', icon: 'heart-outline'},
  {name: 'Deals', icon: 'pricetag-outline'},
];

const products = [
  {
    id: 1,
    name: 'Women Dress',
    price: '$999.99',
    oldPrice: '$1,322.99',
    image:
      'https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/8/0/s/xxl-sarita-trijal-fab-original-imahyzvqtxmqbgcs.jpeg?q=70',
    rating: 4.5,
    store: 'Applestore',
  },
  {
    id: 2,
    name: 'Men Shirt',
    price: '$711.99',
    oldPrice: '$1,022.99',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfnKYbEd911v3jJY3hCZZxItdyGRIg_uQUWQ&s',
    rating: 4.2,
    store: 'Samsung Store',
  },
  {
    id: 3,
    name: 'Titan Field Force',
    price: '$711.99',
    oldPrice: '$1,022.99',
    image:
      'https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dw7646cf71/images/Titan/Catalog/90140QM03_1.jpg',
    rating: 4.2,
    store: 'Samsung Store',
  },
  {
    id: 4,
    name: 'iphone 16',
    price: '$1000.99',
    oldPrice: '$2000.99',
    image:
      'https://www.iplacecorp.com.br/ccstore/v1/images/?source=/file/v2919734287595072822/products/100051717.00-iphone-16-256gb-rosa-myeg3be-a.jpg&height=475&width=475',
    rating: 4.2,
    store: 'Samsung Store',
  },
  {
    id: 5,
    name: 'Women Jeans',
    price: '$70.99',
    oldPrice: '$102.99',
    image:
      'https://offduty.in/cdn/shop/files/SHEIN_Cottnline_Jeans_vass_Pour_Femmes__Mode_en_ligne__SHEIN_FRANCE_main_2_1400x.jpg?v=1722965924',
    rating: 4.2,
    store: 'Samsung Store',
  },
  {
    id: 6,
    name: 'Samsung galaxy s24',
    price: '$711.99',
    oldPrice: '$1,022.99',
    image:
      'https://darlingretail.com/cdn/shop/files/in-galaxy-s24-s928-sm-s928bztqins-thumb-539573348.webp?v=1705660868',
    rating: 4.2,
    store: 'Samsung Store',
  },
];

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#90D6AA'} />
      {/* Header */}
      <View style={styles.header}>
        <View style={{flexDirection: 'row', gap: 20}}>
          <TouchableOpacity>
            <FontAwesome6 name="bars-staggered" size={28} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Home</Text>
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

      {/* <ScrollView> 
      {/* Address */}
      <View style={styles.addressContainer}>
        <Ionicons name="location-outline" size={20} color="white" />
        <Text style={styles.addressText}>
          St 394 Jackson, New york, United States
        </Text>
      </View>
      {/* </ScrollView> */}

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <SearchInput />
      </View>
      <ScrollView>
        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <FlatList
            horizontal
            data={categories}
            renderItem={({item}: any) => (
              <TouchableOpacity
                style={[styles.category]}
                onPress={() => {
                  navigate('fashion');
                }}>
                <Ionicons
                  name={item.icon}
                  size={28}
                  color={selectedCategory === item.name ? '#ffbd00' : '#90D6AA'}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color:
                      selectedCategory === item.name ? '#ffbd00' : '#90D6AA',
                    marginTop: 5,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.name}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg',
          }}
          style={styles.bannerImage}
        />
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/thumbnails/011/871/820/small_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg',
          }}
          style={styles.bannerImage}
        />

        {/* New Products Section */}
        <View style={styles.productHeader}>
          <Text style={styles.sectionTitle}>New Product</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Products Grid */}
        <FlatList
          data={products}
          renderItem={({item}) => (
            <TouchableOpacity key={item.id} style={styles.productCard}>
              <Image source={{uri: item.image}} style={styles.productImage} />
              <View style={{paddingHorizontal: 10, paddingVertical: 3}}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                <Text style={styles.productOldPrice}>{item.oldPrice}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#90D6AA',
  },
  addressText: {
    color: 'white',
    marginLeft: 10,
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#90D6AA',
  },
  categoriesContainer: {
    marginTop: 10,
  },
  category: {
    alignItems: 'center',
    marginHorizontal: 15,
  },

  bannerImage: {
    width: '95%',
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
    objectFit: 'cover',
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  seeAllText: {
    color: '#90D6AA',
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingBottom: 50,
  },
  productCard: {
    width: '48%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#dbdbd9',
  },
  productImage: {
    width: '100%',
    height: 250,
    objectFit: 'cover',
  },
  productName: {
    fontSize: 12,
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'black',
  },
  productPrice: {
    color: '#90D6AA',
    fontWeight: 'bold',
  },
  productOldPrice: {
    textDecorationLine: 'line-through',
    color: 'gray',
    fontSize: 12,
  },
});

export default HomeScreen;
