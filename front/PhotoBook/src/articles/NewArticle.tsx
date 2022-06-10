import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {useAppDispatch} from '../redux/hooks';
import {addNewArticle, fetchAllArticles} from '../redux/slices/articles.slice';

const initialText = '';

const NewArticle = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState(initialText);
  const [isLoading, setIsLoading] = useState(false);
  const [images] = useState([]);

  const onSubmit = () => {
    (async () => {
      try {
        setIsLoading(true);
        console.log('about to add article');
        await dispatch(addNewArticle({content: text, images: images})).unwrap();
        setIsLoading(false);
        await dispatch(fetchAllArticles()).unwrap();
        console.log('fin...');
      } catch (err) {
        console.log('err: ', err);
      } finally {
        setIsLoading(false);
        setText(initialText);
      }
    })();
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        multiline
        placeholder="What's up Dude?"
        numberOfLines={3}
        onChangeText={setText}
        value={text}
        style={styles.textInput}
      />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Button title="Ajouter un article" onPress={onSubmit} />
      )}
    </View>
  );
};

export default NewArticle;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
    paddingHorizontal: 10,
  },
  textInput: {
    borderWidth: 1,
    textAlignVertical: 'top',
  },
});
