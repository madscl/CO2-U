import React from 'react';
//import { ScrollView, StyleSheet } from 'react-native';
//import { ExpoLinksView } from '@expo/samples';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Component} from 'react';
import DailyChallengesScreen from './DailyChallengesScreen';
import PersonalizedChallengesScreen from './PersonalizedChallengesScreen';

export default class ChallengesScreen extends React.Component {
  //not entirely sure what this does 
  constructor(props) {
    super(props);
    this.state = {val: 0};
  }
  renderElement() {
    //this determines which screen is shown
    if(this.state.val === 0) {
      return <DailyChallengesScreen/>;
    } else {
      return <PersonalizedChallengesScreen/>;
    }
  }
  render() {
    return (
      <View style={StyleSheet.container}>
        <View style ={{flexDirection: 'row' }}>
          {/*This sets the first/default screen (daily challenges)*/}
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({val: 0})}>
            <Text style={{color: '#ffffff'}}>Daily Challenges</Text>
          </TouchableOpacity>
            {/*This sets the second screen (personalized challenges)*/}
          <TouchableOpacity
              style={styles.button}
              onPress={() => this.setState({ val: 1 })}>
              <Text style = {{color: '#ffffff'}}>Personalized Challenges</Text>
          </TouchableOpacity>
        </View>
        {/*this is what sets the background (the buttons at the top)*/}
        <View style={{backgroundColor: '#ffffff'}}>
          {this.renderElement()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    marginTop: 30,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#006600',
    padding: 10,
    margin: 2,
  },
});