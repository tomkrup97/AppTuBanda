import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import bands from '../../utils/bands.json';
import FavItem from '../components/FavItem';
import { UseDispatch, useDispatch } from 'react-redux';
import { addToFavorites } from '../features/favoriter/FavSlice';


const BandDetail = ({ route }) => {
  const dispatch = useDispatch()
  const { bandId } = route.params;
  const [band, setBand] = useState({});

  useEffect(() => {
    const bandFound = bands.find(band => band.id === bandId);
    setBand(bandFound);
  }, [bandId]);



  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: band.imagen }} />
        <View style={styles.containerText}>
          <Text style={styles.title}>{band.nombre}</Text>
          <Text style={styles.subtitle}>Tributo a {band.tributo}</Text>
        </View>
        <FavItem band={band} />
      </View>
      <Text style={styles.shows}>Próximos Shows{band.show}</Text>
    </View>
  );
};

export default BandDetail

const styles = StyleSheet.create({
  container:{
    width:"100%",
    flex:1,
    justifyContent:"start",
    alignItems:"center",
    backgroundColor: '#2b2b2b',

  },
  content:{
    width:"100%",
    flexDirection: 'row'

  },

  image:{
    width:150,
    height:150,
    borderRadius:0
    
  },
  containerText:{
    gap:25,
    paddingHorizontal:5,
    paddingVertical:25,
    color: 'white',
    marginLeft:10,
  },

  title:{
    fontSize:25,
    fontWeight:"bold",
    color: 'white'
  },
  subtitle:{
    fontSize:20,
    color: 'white',
  },
  shows:{
    fontSize:20,
    color: 'white',
    flex:1,
    marginTop:50
  }

})