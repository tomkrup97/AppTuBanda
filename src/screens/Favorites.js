import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import FavItem from '../components/FavItem';
import BandByCategory from '../components/BandByCategory';
import bands from '../../utils/bands.json';

const Favorites = () => {
  const favoriteBands = useSelector((state) => state.bands.favoriteBands);
  console.log(bands)

  return (
    <View style={styles.container}>
      {favoriteBands.length === 0 ? (
        <Text style={styles.emptyText}>Todavía no tienes bandas favoritas</Text>
      ) : (
        <>
        <FlatList style={styles.container}
          data={favoriteBands}
          keyExtractor={(item) => (item.id ? item.id.toString() : null)} 
          renderItem={({ item }) => <BandByCategory item={item} />}
        />
    </>
        
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