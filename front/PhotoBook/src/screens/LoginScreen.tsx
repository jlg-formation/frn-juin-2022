import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import api, {LoginForm} from '../api';
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

  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onPress = () => {
    console.log('coucou');

    (async () => {
      try {
        setIsLoading(true);
        const user = await api.connect({login, password});
        dispatch(connect(user));
        navigation.navigate('Home');
      } catch (err) {
        console.log('err: ', err);
        setErrorMsg('Bad login');
      } finally {
        setIsLoading(false);
      }
    })();
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Login</Text>
      <View style={styles.form}>
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
        <Text style={styles.error}>{errorMsg}</Text>
        <View style={styles.buttonContainer}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <Button title="Connect" onPress={onPress} />
          )}
        </View>
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
    height: 400,
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
  error: {
    color: 'red',
    fontWeight: 'bold',
    height: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    height: 60,
  },
});
