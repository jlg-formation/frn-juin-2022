import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const LegalScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Legal</Text>
      <Image style={styles.image} source={require('../../assets/legal.png')} />
    </View>
  );
};

export default LegalScreen;

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
  image: {
    width: 50,
    height: 50,
  },
});
