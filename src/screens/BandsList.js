import { FlatList, StyleSheet, Text, View } from 'react-native'
import bands from '../../utils/bands.json'
import { useEffect, useState } from 'react'
import BandByCategory from '../components/BandByCategory'

const BandsList = ({navigation,route}) => {

  const {categorySelected} = route.params
  const [bandsFiltered,setBandsFiltered] = useState([])
  const [keyword,setKeyword] = useState("")

  useEffect(()=>{
    if(categorySelected)  setBandsFiltered(bands.filter(band => band.category === categorySelected))
    if(keyword) setBandsFiltered(productsFiltered.filter(product => {
     const productTitleLower = product.title.toLowerCase()
     const keywordLower = keyword.toLowerCase()
     return productTitleLower.includes(keywordLower)
   }))
   },[categorySelected,keyword])

  return (
    <>
        <FlatList style={styles.container}
          data={bandsFiltered}
          keyExtractor={item => item.id}
          renderItem={({item})=> <BandByCategory navigation={navigation}  item={item}/>}
        />
    </>
  )
}

export default BandsList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2b2b',
  },
});
