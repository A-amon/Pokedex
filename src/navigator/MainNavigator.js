import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import { Routes } from '@routes'
import Home from '@routes/Home'
import Pokemon from '@routes/Pokemon'
import { Colors } from '@styles'

const MainStack = createStackNavigator()

export default MainNavigator = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen name={Routes.Home}
                    component={Home}
                    options={{
                        headerShown: false,
                        cardStyle: {
                            backgroundColor: Colors.white
                        }
                    }} />
                <MainStack.Screen name={Routes.Pokemon}
                    component={Pokemon}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}