import React, {Complnent} from 'react';
import { ScrollView, StyleSheet, View, Image, Text, AsyncStorage} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import './DailyChallengesScreen'



export default class ActiveGoalsScreen extends React.Component {
  static navigationOptions = {
    title: 'Completed Challenges',
  };

  render() {
    return (
      <ScrollView style={styles.container}
        contentContainerStyle={styles.contentContainer}>
 
      
      </ScrollView> //chnaged all width to be longer as to fill whole web emulator
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'white',
  },
});