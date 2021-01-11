import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import reducers from './reducers';
import Home from './screens/HomeScreen/Home';
import Details from './screens/DetailScreen/Details';

const Stack = createStackNavigator();

const App = () => (
  <Provider store={createStore(reducers)}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
