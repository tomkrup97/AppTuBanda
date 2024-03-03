import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import BandsList from '../screens/BandsList'
import BandDetail from '../screens/BandDetail'
import Header from '../components/Header'
import { Text } from 'react-native'


const Stack = createNativeStackNavigator()

const ShowsStack = () => {
  return (
    <Text>Shows próximamente</Text>
  )
}

export default ShowsStack