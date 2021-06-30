import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import colors from '../src/consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import houses from './../src/consts/houses';
const windowWidth = Dimensions.get('window').width; // Gets app window's width

const HomeScreen = () => {
  const ListCategories = () => {
    const [selectedCategoryIndex, setselectedCategoryIndex] = useState(0);
    const categoryList = ['Popular', 'Recommended', 'Nearest'];
    return (
      <View style={style.categoryListContainer}>
        {categoryList.map((category, index) => (
          <Pressable
            // key={index}
            onPress={() => setselectedCategoryIndex(index)}>
            <Text
              style={[
                style.categoryListText,
                index === selectedCategoryIndex && style.activeCategoryListText,
              ]}>
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };

  // We bring in the  house prop
  const Card = ({house}) => {
    const [isFavoriteIcon, setFavoriteIcon] = useState(false);
    let favIconName = isFavoriteIcon;
    let favorited = favIconName ? 'favorite' : 'favorite-border';
    const toggleFavIcon = () => {
      setFavoriteIcon(!isFavoriteIcon);
    };

    return (
      <View style={style.card}>
        <Image source={house.image} style={style.cardImage} />
        <View style={style.calificationContainer}>
          <View style={style.calificationBackground}>
            <Icon name="star" size={18} style={style.califIcon} />
            <Text style={style.calification}>{house.calif}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginTop: 30,
              marginBottom: 10,
            }}>
            {house.title}
          </Text>
          <View style={style.facility}>
            <Icon name="location-on" size={28} />
            <Text style={{fontSize: 16, marginBottom: 10}}>
              {house.location}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 0,
            flexDirection: 'row',
            paddingTop: 10,
          }}>
          <View style={style.facility}>
            <Icon name="king-bed" size={28} />
            <Text style={style.facilityText}>3</Text>
          </View>
          <View style={style.facility}>
            <Icon name="bathtub" size={28} />
            <Text style={style.facilityText}>2</Text>
          </View>
          <View style={style.facility}>
            <Icon name="aspect-ratio" size={28} />
            <Text style={style.facilityText}>230 ft²</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              paddingTop: 10,
            }}>
            $440/m
          </Text>
          <TouchableOpacity onPress={() => toggleFavIcon()}>
            <Icon name={favorited} size={28} style={[style.favIcon]} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <StatusBar
        translucent={false}
        backgroundColor={colors.white}
        barStyle="dark-content"
      />

      <View style={style.header}>
        <View>
          <Text style={{color: colors.grey}}>Location</Text>
          <Text style={{color: colors.dark, fontSize: 20, fontWeight: 'bold'}}>
            United States
          </Text>
        </View>
        <Image
          source={require('../src/assets/person1.jpg')}
          style={style.profileImage}
        />
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <View style={style.searchInputContainer}>
            <Icon name="search" size={25} color={colors.grey} />
            <TextInput placeholder="Search address, city, location" />
          </View>
          <View style={style.sortBtn}>
            <Icon name="tune" color={colors.white} size={25} />
          </View>
        </View>
        <ListCategories />
        <FlatList
          style={style.cardsContainer}
          showsVerticalScrollIndicator={false} // removes scrollbar
          data={houses}
          renderItem={({item}) => <Card house={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 35,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: colors.light,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  sortBtn: {
    backgroundColor: colors.dark,
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  categoryListContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: colors.grey,
  },
  activeCategoryListText: {
    color: colors.dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  cardsContainer: {
    paddingTop: 20,
  },
  card: {
    flexWrap: 'wrap',
    height: 250,
    backgroundColor: colors.white,
    elevation: 15,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    borderRadius: 20,
    marginBottom: 25,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'space-around',
  },

  cardImage: {
    height: '65%',
    width: windowWidth / 2 - 50,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 40,
  },
  facility: {
    flexDirection: 'row',
    marginRight: 15,
  },
  facilityText: {
    marginLeft: 5,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  calificationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-around',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  calificationBackground: {
    alignItems: 'center',
    backgroundColor: colors.blue,
    borderRadius: 12,
    marginTop: 2,
    paddingHorizontal: 15,
    paddingVertical: 1,
    flexDirection: 'row',
  },
  calification: {
    alignSelf: 'center',
    alignContent: 'flex-end',
    alignItems: 'baseline',
    backgroundColor: colors.blue,
    borderRadius: 50,
    color: colors.white,
    marginTop: 3,
    paddingHorizontal: 3,
    fontSize: 16,
    fontWeight: 'bold',
  },
  califIcon: {
    color: colors.yellow,
    alignContent: 'flex-end',
  },
  favIcon: {
    alignSelf: 'flex-end',
    paddingRight: 20,
    color: colors.red,
  },
});
