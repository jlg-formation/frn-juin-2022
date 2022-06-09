import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {RootStackParamList} from '../navigation';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {
  connect,
  selectAuthentication,
  User,
} from '../redux/slices/authentication.slice';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({navigation}: LoginProps) => {
  const authentication = useAppSelector(selectAuthentication);
  const dispatch = useAppDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onPress = () => {
    console.log('coucou');
    const user: User = {
      displayName: 'toto',
    };
    dispatch(connect(user));
    navigation.navigate('Home');
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Login</Text>
      <View style={styles.form}>
        <Text>{login}</Text>
        <Text>{password}</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Ex: toto"
          onChangeText={setLogin}
          defaultValue={''}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password..."
          onChangeText={setPassword}
          defaultValue={''}
          secureTextEntry
        />
        <Button title="Connect" onPress={onPress} />
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
