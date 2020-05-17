import React from 'react';
//import { ScrollView, StyleSheet } from 'react-native';
//import { ExpoLinksView } from '@expo/samples';
import {
  AsyncStorage,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
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
    state = {};
    this.state = {
      daily: "Loading...",
      completed: false,
    }
    this.toggleSwitch = this.toggleSwitch.bind(this);
  }
  
  setupDailyChallengeListener(dailyNum) {
    //references daily challenge branch and snapshots value
    firebase.database().ref('suggestions/' + dailyNum).on('value', (snapshot) => {
      console.log(snapshot.val());
      //sets state as value
      this.setState({daily: snapshot.val()})
      this.syncToggleStateWithStorage();
    });
  }

  async syncToggleStateWithStorage() {
    const keys = await AsyncStorage.getAllKeys();
    var today = new Date();
    today.setHours(0, 0, 0, 0)
    var todayString = today.toLocaleDateString();
    for (stringKey of keys) {
      var nameAndDate = stringKey.split("~");
      var name = nameAndDate[0];
      var date = nameAndDate[1];
      if (stringKey.startsWith(this.state.daily) && date == todayString) {
        this.toggleSwitch(true);
      }
    }
  }

  setupBlurbListener(dailyNum) {
    //references daily challenge branch and snapshots value
    firebase.database().ref('blurbs/' + dailyNum).on('value', (snapshot) => {
      console.log(snapshot.val());
      //sets state as value
      this.setState({blurb: snapshot.val()})
    });
  }

  componentDidMount() {
    //this is the part which allows it to update daily
    var today = new Date();
    date = today.getDate();
    value = date
    this.setupDailyChallengeListener(value)
    this.setupBlurbListener(value)
  }



  toggleSwitch(newValue)  {
    this.setState({completed: newValue});
    var today = new Date();
    today.setHours(0, 0, 0, 0)
    var key = this.state.daily + '~' + today.toLocaleDateString();
    if (newValue) {
      AsyncStorage.setItem(key, 'true');
    }
  }

  render() {
    return (
      <ScrollView style={StyleSheet.container}>
        <Text style={styles.getStartedText}>Here's how to reduce your carbon footprint today:</Text>
        <Text style={styles.getStartedText}></Text>
        <Text style={styles.getStartedText}></Text>
        <Text style={styles.getAttentionText}>Daily Challenge</Text> 
        <Text style={styles.dailyChallengeText}>{this.state.daily}</Text>
        <Text style={styles.getStartedText}></Text>
        <Text style={styles.getAttentionText}>Why?</Text>
        <Text style={styles.dailyChallengeText}>{this.state.blurb}</Text>
        <View style={styles.switchContainer}>
          <Text style={styles.horizontalItem}>Completed</Text>
          <Switch
            // trackColor={{ false: "#767577", true: "#81b0ff" }}
            // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            // ios_backgroundColor="#3e3e3e"
           onValueChange={this.toggleSwitch}
           value={this.state.completed}
          />
        </View>

        <Image
            source={
              __DEV__
                ? require('../assets/images/dailyChallengePlant.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.iconImage}
          />

      </ScrollView>
    )
  }
}


DailyChallengesScreen.navigationOptions = {
  title: 'Daily Suggestions',
};


const styles = StyleSheet.create({
  horizontalItem: {
    margin: 8,
  },
  switchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  iconImage: {
    //width: 200,
    //height: 250,
    //resizeMode: 'contain',
    marginTop: 150,
    marginLeft: 5,
    //textAlign: 'center',
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
    fontSize: 20,
    color: 'rgba(0 ,0 ,0, 100)',
    lineHeight: 24,
    textAlign: 'center',
  },
});