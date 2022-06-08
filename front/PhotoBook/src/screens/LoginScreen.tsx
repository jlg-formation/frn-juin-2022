import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {RootStackParamList} from '../navigation';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({navigation}: LoginProps) => {
  const connect = () => {
    console.log('coucou');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Login</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          placeholder="Ex: toto"
          onChangeText={newText => {}}
          defaultValue={''}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password..."
          onChangeText={newText => {}}
          defaultValue={''}
          secureTextEntry
        />
        <Button title="Connect" onPress={connect} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'stretch',
    backgroundColor: 'white',
    height: '100%',
    padding: 10,
  },
  form: {
    height: 200,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
  },
});
