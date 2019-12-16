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

export default class DailyChallengesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {valx: 0};
  }
  render() {
    return (
      <ScrollView style={StyleSheet.container}>
        <Text style={styles.getStartedText}>Here's how to reduce your carbon footprint</Text>
        <Text style={styles.getStartedText}></Text>
        <Text style={styles.getAttentionText}>Daily Challenge:</Text> 
        <Text style={styles.dailyChallengeText}>Try to eat 2 plant based meals today!</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 22,
    color: 'rgba(0 ,100 ,0, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  getAttentionText: {
    fontSize: 20,
    color: 'rgba(0 ,0 ,0, 100)',
    lineHeight: 24,
    textAlign: 'center',
  },
  dailyChallengeText: {
    fontSize: 16,
    color: 'rgba(0 ,0 ,0, 100)',
    lineHeight: 24,
    textAlign: 'center',
  },
});