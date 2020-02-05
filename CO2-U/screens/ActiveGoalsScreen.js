import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'white',
  },
});


export default class ActiveGoalsScreen extends React.Component {
  static navigationOptions = {
    title: 'Completed Challenges',
  };

  render() {
    return (
      <ScrollView style={styles.container}
        contentContainerStyle={styles.contentContainer}>
          <Text style={styles.titleText}>Goal 1</Text> 
          {/*displays text on L edge of screen, in HomeScreen this same code displays text in the middle, idk why*/}
          <View style={{ width: 2000, height: 100, backgroundColor: 'powderblue' }} />
          {/*displays box of color, will not be gaurenteed to fill whole screen on bigger phone, could just make huge num and never go away?*/}
          <Text style={styles.titleText}>Goal 2</Text>
          <View style={{ width: 2000, height: 100, backgroundColor: 'skyblue' }} />
          <Text style={styles.titleText}>Goal 3</Text>
          <View style={{ width: 2000, height: 100, backgroundColor: 'steelblue' }} />
      </ScrollView> //chnaged all width to be longer as to fill whole web emulator
    );
  }
}