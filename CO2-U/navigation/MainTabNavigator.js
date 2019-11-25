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
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: SuggestionsScreen,
  },
  config
);


LinksStack.navigationOptions = {
  tabBarLabel: 'Suggestions',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const AchievementsStack = createStackNavigator(
  {
    Achievement: AchievementsScreen,
  },
  config
);

AchievementsStack.navigationOptions = {
  tabBarLabel: 'Achievements',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

AchievementsStack.path = '';


const ActiveGoalsStack= createStackNavigator(
  {
    ActiveGoals: ActiveGoalsScreen,
  },
  config
);


ActiveGoalsStack.navigationOptions = {
  tabBarLabel: 'Active Goals',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

ActiveGoalsStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  AchievementsStack,
  ActiveGoalsStack,
});

tabNavigator.path = '';


export default tabNavigator;
