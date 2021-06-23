import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoardScreen from './screens/OnBoardScreen';
import HomeScreen from './screens/HomeScreen';
// import {Text, Image, View} from 'react-native';
// import {layoutStyles as styles} from './src/styles';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

/* const App = () => {
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
 */
