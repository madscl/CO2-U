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
    title: 'Active Goals',
  };

  render() {
    return (
      <ScrollView style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.titleContainer}>  {/*this code is only temp stand-in (just looks good)*/}
          <Text style={styles.titleText}>Goal 1</Text> 
          {/*displays text on L edge of screen, in HomeScreen this same code displays text in the middle, idk why*/}
          <View style={{ width: 500, height: 100, backgroundColor: 'powderblue' }} />
          {/*displays box of color, will not be gaurenteed to fill whole screen on bigger phone, could just make huge num and never go away?*/}
          <Text style={styles.titleText}>Goal 2</Text>
          <View style={{ width: 500, height: 100, backgroundColor: 'skyblue' }} />
          <Text style={styles.titleText}>Goal 3</Text>
          <View style={{ width: 500, height: 100, backgroundColor: 'steelblue' }} />
        </View>

        {/**
         * Go ahead and delete ExpoLinksView and replace it with your content;
         * we just wanted to provide you with some helpful links.
      *<View style={{ flex: 20, flexDirection: 'col' }}> THIS CODE DISPLAYS COLORED BOXES IN A COLLUM, COULD REPLACE COL WITH ROW TOO
        *<View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        *<View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      *</View>
        */}
      </ScrollView>
    );
  }
}