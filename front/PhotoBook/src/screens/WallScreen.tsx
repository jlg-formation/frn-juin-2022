import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {Icon} from '@rneui/themed';
import {backEndUrl} from '../env';

const WallScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.image}
        source={{
          uri: backEndUrl + '/images/wall.jpg',
        }}
      />
      <Text style={styles.text}>Wall</Text>
      <Icon name="wallpaper" />
    </View>
  );
};

export default WallScreen;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
  },
});
