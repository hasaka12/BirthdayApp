import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Roboto from 'native-base/Fonts/Roboto.ttf';
import RobotoMedium from 'native-base/Fonts/Roboto_medium.ttf';

import reducers from './reducers';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/GiftScreen';
import QuotesScreen from './screens/QuotesScreen';
import GalleryScreen from './screens/GalleryScreen';
import StoryScreen from './screens/StroryScreen';

const Stack = createStackNavigator();

const headerStyle = {
  headerStyle: {
    backgroundColor: '#3f51b5',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    paddingLeft: 'auto',
    fontWeight: 'bold',
  },
};

const App = () => {
  const [loaded] = useFonts({
    Roboto,
    Roboto_medium: RobotoMedium,
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={createStore(reducers)}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Find Your Gifts"
            component={DetailScreen}
            options={headerStyle}
          />
          <Stack.Screen
            name="Quotes"
            component={QuotesScreen}
            options={headerStyle}
          />
          <Stack.Screen
            name="Our Gallery"
            component={GalleryScreen}
            options={headerStyle}
          />
          <Stack.Screen
            name="Our Story"
            component={StoryScreen}
            options={headerStyle}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
