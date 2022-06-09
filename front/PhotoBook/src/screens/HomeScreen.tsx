import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../navigation';
import {useAppSelector} from '../redux/hooks';
import {selectAuthentication} from '../redux/slices/authentication.slice';
import LegalScreen from './LegalScreen';
import SettingsScreen from './SettingsScreen';
import WallScreen from './WallScreen';

import {Icon} from '@rneui/themed';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Tab = createBottomTabNavigator();

const HomeScreen = ({navigation}: HomeProps) => {
  const authentication = useAppSelector(selectAuthentication);

  useLayoutEffect(() => {
    if (!authentication.user) {
      navigation.replace('Login');
    }
  }, [authentication]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Wall" component={WallScreen} />
      <Tab.Screen name="Legal" component={LegalScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '100%',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
