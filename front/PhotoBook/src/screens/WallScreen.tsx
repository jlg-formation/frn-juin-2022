import React from 'react';
import {Image, RefreshControl, ScrollView, StyleSheet} from 'react-native';
import ArticleList from '../articles/ArticleList';
import NewArticle from '../articles/NewArticle';
import {backEndUrl} from '../env';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {
  fetchAllArticles,
  selectArticleStatus,
} from '../redux/slices/articles.slice';

const WallScreen = () => {
  const dispatch = useAppDispatch();
  const articleStatus = useAppSelector(selectArticleStatus);
  const onRefresh = () => {
    dispatch(fetchAllArticles());
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={articleStatus === 'loading'}
          onRefresh={onRefresh}
        />
      }>
      <Image
        style={styles.image}
        source={{
          uri: backEndUrl + '/images/wall.jpg',
        }}
      />
      <NewArticle />
      <ArticleList />
    </ScrollView>
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
