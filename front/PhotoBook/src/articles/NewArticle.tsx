import {Icon} from '@rneui/base';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
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

  const addPhoto = () => {
    console.log('addPhoto');
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
      <View style={styles.buttons}>
        <TouchableOpacity onPress={addPhoto}>
          <View style={styles.buttonContainer}>
            <Icon name="add-photo-alternate" color="white" />
          </View>
        </TouchableOpacity>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <TouchableOpacity onPress={onSubmit}>
            <View style={styles.buttonContainer}>
              <Icon name="add" color="white" />
            </View>
          </TouchableOpacity>
        )}
      </View>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    backgroundColor: 'hsl(240, 100%, 70%)',
    padding: 5,
  },
});
