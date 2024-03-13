import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import FavItem from '../components/FavItem';

const Favorites = () => {
  const favoriteBands = useSelector(state => state.bands.favoriteBands);

  return (
    <View style={styles.container}>
      {favoriteBands.length === 0 ? (
        <Text style={styles.emptyText}>Todavía no tienes bandas favoritas</Text>
      ) : (
        <FlatList
          data={favoriteBands}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <FavItem band={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 290
  },
});

export default Favorites;