import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WallScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Wall</Text>
    </View>
  );
};

export default WallScreen;

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
