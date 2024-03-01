import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'


const BandByCategory = ({item,navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate("BandDetail",{bandId:item.id})} style={styles.container}>
      <Text style={styles.text}> {item.nombre}</Text>
      <Image style={styles.image} source={{uri:item.imagen}} resizeMode="cover"/>
    </Pressable>
  )
}

export default BandByCategory

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        width:"80%",
        marginHorizontal:"10%",
        padding:10,
        marginVertical:10,
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        gap:20
    },
    text:{
        width:"60%",
        fontSize:16,
        color: 'white'
    },
    image:{
        minWidth:90,
        minHeight:90,
        borderRadius:5
    }
})