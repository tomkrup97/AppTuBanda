import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import BandsList from '../screens/BandsList'
import BandDetail from '../screens/BandDetail'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={({route,navigation})=>{
                return {
                header: () =>{
                    return <Header 
                                navigation={navigation}
                                title={route.name === "Home" ? "Bandas":
                                        route.name ==="BandsList" ? route.params.categorySelected:
                                        "Detalle"
                }/>
                }
                }
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="BandsList" component={BandsList} />
            <Stack.Screen name="BandDetail" component={BandDetail} />
        </Stack.Navigator>
  )
}

export default HomeStack