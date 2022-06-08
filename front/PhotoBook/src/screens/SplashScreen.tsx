import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>PhotoBook</Text>
    </View>
  );
};

export default SplashScreen;

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
