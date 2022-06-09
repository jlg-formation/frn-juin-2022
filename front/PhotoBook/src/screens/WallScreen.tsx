import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Icon} from '@rneui/themed';

const WallScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Wall</Text>
      <Icon name="wallpaper" />
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
