// // First screen which we will use to send the data
// import React, { Component } from 'react';
// //import react in our code.
// import { StyleSheet, View, Button, TextInput } from 'react-native';
// //import all the components we are going to use.
 
// export default class DailyChallengesScreen extends Component {
//   constructor(props) {
//     //constructor to set default state
//     super(props);
//     this.state = {
//       username: '',
//     };
//   }
//   static navigationOptions = {
//     //Setting the header of the screen
//     title: 'Daily Challenges',
//   };
 
//   render() {
//     //const { navigate } = this.props.navigation;
//     return (
//       //View to hold our multiple components
//       <View style={styles.container}>
//         {/*Input to get the value from the user*/}
//         {/* <TextInput
//           value={this.state.username}
//           onChangeText={username => this.setState({ username })}
//           placeholder={'Enter Any value'}
//           style={styles.input}
//         /> */}
//         {/*Button to go to the next activity*/}
//         {/* <Button
//           title="Go Next"
//           //Button Title
//           onPress={() =>
//             navigate('ActiveGoalsScreen', {
//               JSON_ListView_Clicked_Item: this.state.username,
//             })
//           } */}
//           {/* //On click of the button we will send
//           //the data as a Json from here to the Second Screen using navigation prop
//         /> */}
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     padding: 16,
//   },
//   input: {
//     width: 200,
//     height: 44,
//     padding: 10,
//     marginBottom: 10,
//     backgroundColor: '#DBDBD6',
//   },
// });












import React, {Component} from 'react';
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
  AsyncStorage,
  Button,
} from 'react-native';
import {Constants} from 'expo';
import {withNavigation} from 'react-navigation';
import {CheckBox} from 'react-native-elements';//need to install this dependency 
            //https://react-native-elements.github.io/react-native-elements/docs/getting_started.html
import '@expo/vector-icons';
import * as firebase from 'firebase';
import { TextInput } from 'react-native-paper';

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
    state = {
      checked: false,
    };
    press = () => {
      this.setState((state) => ({
        checked: !state.checked,
      }));
    }
    this.state = {
      daily: "Loading..."
    }
  }

  static navigationOptions = {
    title: 'Daily Challenges',
  }

  setGoalsValue = (goal) => {
    console.log('setGoalsValue called  value = ', goal);
    AsyncStorage.setItem('complete', goal);
    this.setState(() => {
      console.log('complete value = ', goal)      
      return {
        complete: goal
      };
    }); 
  }
  
  setupDailyChallengeListener(dailyNum) {
    //references daily challenge branch and snapshots value
    firebase.database().ref('suggestions/' + dailyNum).on('value', (snapshot) => {
      console.log(snapshot.val());
      //sets state as value
      this.setState({daily: snapshot.val()})
    });
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

  render() {
    //const {navigate} = this.props.navigation;
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
        <CheckBox 
          center
          title='Complete this daily challenge'
          checked={this.state.checked}
          onPress={() => (this.setGoalsValue(this.state.daily), this.setState({checked: !this.state.checked}))}
          // onPress={()=> (this.setGoalsValue(this.state.daily), this.setState({ checked: !this.state.checked}), 
          //               navigate('ActiveGoalsScreen', {JSON_ListView_Clicked_Item: this.state.daily}))}
        />
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