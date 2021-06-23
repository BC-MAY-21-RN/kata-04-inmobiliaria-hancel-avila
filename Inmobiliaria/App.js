import {View, Text, Image} from 'react-native';
import React from 'react';
import {layoutStyles as styles} from './src/styles';
// import { data } from '../data';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text> hello Header</Text>
      <View style={styles.heroContainer}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tribeca-loft-en-ny-03-1535103794.jpg',
          }}
        />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.titleContainer}>
          <Text>hello title </Text>
        </View>
        <View style={styles.listContainer}>
          <Text>hello body</Text>
        </View>
      </View>
    </View>
  );
};

export default App;
