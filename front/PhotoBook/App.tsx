/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import api from './src/api';
import DeviceInfoModule from './src/native/DeviceInfoModule';
import {RootStackParamList} from './src/navigation';
import {useAppDispatch} from './src/redux/hooks';
import {connect} from './src/redux/slices/authentication.slice';
import {store} from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SplashScreen from './src/screens/SplashScreen';

const testx = () => {
  DeviceInfoModule.getUniqueId('helllllooooooo', (err, result) => {
    if (err) {
      console.log('err: ', err);
      return;
    }
    console.log('result: ', result);
  });
  DeviceInfoModule.getUniqueId('zut', (err, result) => {
    if (err) {
      console.log('err: ', err);
      return;
    }
    console.log('result: ', result);
  });
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  testx();
  return (
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  );
};

const ReduxApp = () => {
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(true);
  console.log('setIsLoading: ', setIsLoading);
  console.log('isLoading: ', isLoading);

  useEffect(() => {
    (async () => {
      try {
        const user = await api.isConnected();
        if (user) {
          dispatch(connect(user));
        }
      } catch (err) {
        console.log('err: ', err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [dispatch]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar barStyle="light-content" />
        {isLoading ? (
          <SplashScreen />
        ) : (
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default App;
