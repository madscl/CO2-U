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
import * as firebase from 'firebase';

export default class PersonalizedChallengesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {valx: 0};
  }
  render() {
    return (
      <ScrollView style={StyleSheet.container}>
        <Text style={styles.getStartedText}>this is the personalized challenges screen</Text>
        <Image
            source={
              __DEV__
                ? require('../assets/images/flowers.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.iconImage}
          />
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
  iconImage: {
    width: 250,
    height: 250,
    //resizeMode: 'contain',
    marginTop: 430,
    marginLeft: 5,
    //textAlign: 'center',
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