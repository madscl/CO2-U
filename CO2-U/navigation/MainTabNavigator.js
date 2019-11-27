import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SuggestionsScreen from '../screens/SuggestionsScreen';
import AchievementsScreen from '../screens/AchievementsScreen';
import ActiveGoalsScreen from '../screens/ActiveGoalsScreen';
import CalculationsScreen from "../screens/CalculationsScreen";

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});


const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Calculations: CalculationsScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    //the 'ios-home' and 'md-home' will change the images at the bottom. 
    //use https://github.com/oblador/react-native-vector-icons/blob/master/glyphmaps/Ionicons.json
    //to find out the different options
    <TabBarIcon focused={focused} name={Platform.OS === 'ios'? `ios-home`: 'md-home'}/>
  ),
};

HomeStack.path = '';


const SuggestionsStack = createStackNavigator(
  {
    Suggestions: SuggestionsScreen,
  },
  config
);


SuggestionsStack.navigationOptions = {
  tabBarLabel: 'Suggestions',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-chatbubbles' : 'md-chatbubbles'} />
  ),
};

SuggestionsStack.path = '';


const ActiveGoalsStack= createStackNavigator(
  {
    ActiveGoals: ActiveGoalsScreen,
  },
  config
);

ActiveGoalsStack.navigationOptions = {
  tabBarLabel: 'Active Goals',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-checkbox' : 'md-checkbox'} />
  ),
};

ActiveGoalsStack.path = '';

const AchievementsStack = createStackNavigator(
  {
    Achievement: AchievementsScreen,
  },
  config
);


AchievementsStack.navigationOptions = {
  tabBarLabel: 'Achievements',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-ribbon' : 'md-ribbon'} />
  ),
};

AchievementsStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SuggestionsStack,
  ActiveGoalsStack,
  AchievementsStack,
});

tabNavigator.path = '';


export default tabNavigator;
