import { StyleSheet, Text, View,FlatList } from 'react-native';
import categories from '../../utils/categories.json';
import CardCategory from './CardCategory';

const Categories = ({navigation}) => {
  return (
    <FlatList style={styles.container}
    data={categories}
    keyExtractor={item => item}
    renderItem={({item})=> <CardCategory item={item} navigation={navigation}/>}
    />
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2b2b',
  },
});
