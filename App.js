import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home'
import AboutUs from './screens/AboutUs'
import MediaProduction from './screens/MediaProduction'

const Stack = createStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="home" component={Home} /> */}
                {/* <Stack.Screen name="aboutUs" component={AboutUs} /> */}
                <Stack.Screen name="mediaProduction" component={MediaProduction} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
