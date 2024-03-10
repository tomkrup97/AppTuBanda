import React from 'react';
import { StyleSheet, Text, Pressable, Button } from 'react-native';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../features/favoriter/FavSlice';

const FavItem = ({ band, favorites, addToFavorites, removeFromFavorites }) => {
  const isFavorite = favorites.some(favorite => favorite.id === band.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(band.id);
    } else {
      addToFavorites(band.id);
    }
  };

  return (

      <Pressable onPress={handleToggleFavorite} style={styles.container}>
        <Text style={styles.text}>{isFavorite ? '★' : '☆'}</Text>
      </Pressable>

  );
};

const mapStateToProps = state => ({
  favorites: state.bands.favoriteBands,
});

const mapDispatchToProps = {
  addToFavorites,
  removeFromFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavItem);

const styles = StyleSheet.create({
  container: {
    maxHeight:40,
    marginTop: 5,
    paddingTop: 0
  },

  text: {
    fontSize: 35,
    color: 'white'
  },
});