import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {useAppDispatch} from '../redux/hooks';
import {addNewArticle} from '../redux/slices/articles.slice';

const NewArticle = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("Hey what's up?");
  const [images] = useState([]);

  const onSubmit = () => {
    (async () => {
      try {
        console.log('about to add article');
        await dispatch(addNewArticle({content: text, images: images})).unwrap();
      } catch (err) {
        console.log('err: ', err);
      } finally {
      }
    })();
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        multiline
        numberOfLines={3}
        onChangeText={setText}
        value={text}
        style={styles.textInput}
      />
      <Button title="Ajouter un article" onPress={onSubmit} />
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
