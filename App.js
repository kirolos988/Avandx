import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="service" component={Service} />
        </Stack.Navigator>
    )
}
