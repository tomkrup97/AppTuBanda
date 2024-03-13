import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Favorites from '../screens/Favorites'
import BandDetail from '../screens/BandDetail'
import Header from '../components/Header'
import { Text } from 'react-native'


const Stack = createNativeStackNavigator()

const FavStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Favoritos'
        screenOptions={({navigation})=>{
            return {
                header: () => {
                    return <Header title='Favoritos' navigation={navigation}/> 
                }
            }
        }}
    >
        <Stack.Screen name='Favoritos' component={Favorites}/>
    </Stack.Navigator>
  )
}

export default FavStack