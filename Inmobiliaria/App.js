import {View, Text, Image} from 'react-native';
import React from 'react';
import {layoutStyles as styles} from './src/styles';
const App = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://st.depositphotos.com/1007514/2506/i/950/depositphotos_25067721-stock-photo-mallard-duck-with-clipping-path.jpg',
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
