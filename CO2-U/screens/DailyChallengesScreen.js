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

//setting up firebase
var firebaseConfig = {
  apiKey: "AIzaSyBK6JW-daTxb4cdaU0lvopE3dWJUeeLI-Q",
  authDomain: "coandu-b7fb5.firebaseapp.com",
  databaseURL: "https://coandu-b7fb5.firebaseio.com",
  projectId: "coandu-b7fb5",
  storageBucket: "coandu-b7fb5.appspot.com",
  messagingSenderId: "1090602721142",
  appId: "1:1090602721142:web:5a33a3e8013df169fce457",
  measurementId: "G-JL044NSZGD"
};

//initialize firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default class DailyChallengesScreen extends React.Component {
  constructor(props) {
    super(props);
    //updates daily challenge value
    this.state = {
      daily: "Loading..."
    }
  }

  
  setupDailyChallengeListener(dailyNum) {
    //references daily challenge branch and snapshots value
    firebase.database().ref('suggestions/' + dailyNum).on('value', (snapshot) => {
      console.log(snapshot.val());
      //sets state as value
      this.setState({ daily: snapshot.val()})
    });
  }

  componentDidMount() {
    var today = new Date();
    date = today.getDate();
    value = date
    this.setupDailyChallengeListener(value)
  }

  render() {
    return (
      <ScrollView style={StyleSheet.container}>
        <Text style={styles.getStartedText}>Here's how to reduce your carbon footprint</Text>
        <Text style={styles.getStartedText}></Text>
        <Text style={styles.getAttentionText}>Daily Challenge:</Text> 
        <Text style={styles.dailyChallengeText}>{this.state.daily}</Text>
      </ScrollView>
    )
  }
}


DailyChallengesScreen.navigationOptions = {
  title: 'Daily Suggestions',
};


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
    fontSize: 28,
    color: 'rgba(0 ,100 ,0, 1)',
    lineHeight: 28,
    textAlign: 'center',
  },
  getAttentionText: {
    fontSize: 24,
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