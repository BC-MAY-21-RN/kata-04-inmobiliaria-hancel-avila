/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import colors from '../src/consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons'; //Tt - works

//import {Icon} from 'react-native-elements'; //Rcrio

import houses from './../src/consts/houses';

const HomeScreen = () => {
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
});
