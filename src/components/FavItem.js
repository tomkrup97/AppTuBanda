import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../features/favoriter/FavSlice';

const FavItem = ({ band }) => {
  const dispatch = useDispatch();
  const favoriteBands = useSelector((state) => state.bands.favoriteBands);
  const isFavorite = favoriteBands.includes(band.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(band.id));
    } else {
      dispatch(addToFavorites(band.id));
    }
  };

  return (
    <Pressable onPress={handleToggleFavorite} style={styles.container}>
      <Text style={styles.text}>{isFavorite ? '★' : '☆'}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 40,
    marginTop: 5,
    paddingTop: 0,
  },
  text: {
    fontSize: 35,
    color: 'white',
  },
});

export default FavItem;
