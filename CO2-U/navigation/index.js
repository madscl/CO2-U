import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import ActiveGoalsScreen from '../screens/ActiveGoalsScreen'

const StackNav = createStackNavigator({
    Home: {screen: HomeScreen},
    AddTask: {screen: ActiveGoalsScreen}
    },
    {mode: 'modal'}
)

const RootNavigator = createAppContainer(StackNav)
export default RootNavigator