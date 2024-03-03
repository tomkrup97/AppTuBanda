import { StyleSheet,View,Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack'
import FavStack from './FavStack'
import ShowsStack from './ShowsStack'

import TabBarIcon from '../components/TabBarIcon';


const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
        <NavigationContainer>
           <Tab.Navigator
                initialRouteName='HomeStack'
                screenOptions={{
                    headerShown:false,
                    tabBarShowLabel:false,
                    


                }}
           >
                <Tab.Screen 
                name='HomeStack'
                component={HomeStack}
                options={{
                    tabBarIcon: ({focused}) => 
                    <TabBarIcon title="Bandas" nameIcon="folder-music" focused={focused}/>
                }}
                />
                <Tab.Screen 
                    name='FavStack' 
                    component={FavStack}
                    options={{
                        tabBarIcon: ({focused}) => 
                        <TabBarIcon title="Favoritos" nameIcon="star" focused={focused}/>
                    }}

                />
                <Tab.Screen 
                    name='ShowsStack' 
                    component={ShowsStack}
                    options={{
                        tabBarIcon: ({focused}) => <TabBarIcon title="Shows" nameIcon="calendar" focused={focused}/>
                    }}
                    />

           </Tab.Navigator>
        </NavigationContainer>
  )
}

export default MainNavigator