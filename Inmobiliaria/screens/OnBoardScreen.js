/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  StatusBar,
  View,
  Text,
  Pressable,
} from 'react-native';
import colors from './../src/consts/colors';

const OnBoardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: colors.white}}>
      <StatusBar translucent backgroundColor={colors.transparent} />
      <Image
        source={require('../src/assets/onBoardImage.jpg')}
        style={style.image}
      />
      <View style={style.indicatorContainer}>
        <View style={style.indicator} />
        <View style={style.indicator} />
        <View style={[style.indicator, style.indicatorActive]} />
      </View>
      <View style={{paddingHorizontal: 20, paddingTop: 20}}>
        <View>
          <Text style={style.title}>Find your</Text>
          <Text style={style.title}>new home</Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={style.textStyle}>
            Schedule visits in just a few clicks
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingBottom: 40,
          }}
        />
        <Pressable onPress={() => navigation.navigate('HomeScreen')}>
          <View style={style.btn}>
            <Text style={{color: colors.white}}>Get Started</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  image: {
    height: 420,
    width: '100%',
    borderBottomLeftRadius: 100,
  },
  indicatorContainer: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    height: 3,
    width: 30,
    backgroundColor: colors.grey,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  indicatorActive: {
    backgroundColor: colors.dark,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  textStyle: {
    fontSize: 16,
    color: colors.grey,
  },
  btn: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: colors.dark,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnBoardScreen;
