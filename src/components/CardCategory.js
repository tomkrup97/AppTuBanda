import { Pressable, StyleSheet, Text, View } from 'react-native'
import categories from '../../utils/categories.json'

const CardCategory = ({item,navigation}) => {
  return (
    <Pressable style={styles.container} onPress={()=>navigation.navigate("BandsList",{categorySelected:item})}>
      
      <Text style={styles.text}>Bandas {item}</Text>
      
    </Pressable>
  )
}

export default CardCategory

const styles = StyleSheet.create({
    container:{
        width:"80%",
        marginHorizontal:"10%",
        marginVertical:10,
        padding:20,
        alignItems:"center",
        borderRadius:5,
        backgroundColor: "black"
    },
    text:{
      fontSize:16,
      color: 'white'  
    }
})