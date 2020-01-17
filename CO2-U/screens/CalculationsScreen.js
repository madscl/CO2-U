import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
  Button,
  Item,
  Alert, 
  SafeAreaView, 
  FlatList, 
  AsyncStorage,
} from 'react-native';

import Constants from 'expo-constants';
import { MonoText } from '../components/StyledText';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation';

export default function CalculationsScreen() {
  return ( 
    <View style={styles.container}>
      <ScrollView style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>   1. What is your most used method of transportation?</Text>
        </View>
        <View style={styles.welcomeContainer}>
          <Button
            title="Car"
            color="#003319"
            onPress={() => Alert.alert('Simple Button pressed')}
              //onPress={() => {
                //color='blue'
              //}}
          />
          <Button
            title="Motorcycles"
            color="#004724"
            //onPress={() => Alert.alert('Simple Button pressed')}
            //onPress={() => {
              //color='blue'
            //}}
          />
          <Button
            title="Public Bus"
            color="#006633" //"#00994C"
          />
          <Button
            title="Bike"
            color="#027D40" //"#00CC66"
          />
          <Button
            title="Walk"
            color="#00994C" //"#003319"
          />
          <Button
            title="Ferry"
            color="#02AC57" //"#006633"
          />
          <Button
            title="Train"
            color="#00CC66" //"#00CC66"
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>   2. If you drive a car or motorcycle what is your average gas mileage?</Text>
        </View>
        <View style={styles.welcomeContainer}>
          <Button
            title="Below 15 mpg"
            color="#003319"
            /*onPress={() => Alert.alert('Simple Button pressed')}
            onPress={() => {
              color='blue'
            }}*/
          />
          <Button
            title="15-20 mpg"
            color="#004724"
          />
          <Button
            title="20-25 mpg"
            color="#006633"
          />
          <Button
            title="25-30 mpg"
            color="#027D40"
          />
          <Button
            title="30-35 mpg"
            color="#00994C"
          />
          <Button
            title="35-40 mpg"
            color="#02AC57"
          />
          <Button
            title="Above 40 mpg"
            color="#00CC66"
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>   3. How many miles on average do you travel each day?</Text>
        </View>
        <View style={styles.welcomeContainer}>
          <Button
            title="Up to 5 miles"
            color="#003319"
            /*onPress={() => Alert.alert('Simple Button pressed')}
            onPress={() => {
              color='blue'
            }}*/
          />
          <Button
            title="5-15 miles"
            color="#004724"
          />
          <Button
            title="15-25 miles"
            color="#006633"
          />
          <Button
            title="25-35 miles"
            color="#027D40"
          />
          <Button
            title="Over 35 miles"
            color="#00994C"
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>   4. How many people are you usually driving with?</Text>
        </View>
        <View style={styles.welcomeContainer}>
          <Button
            title="None, I am a lone wolf"
            color="#003319"
            /*onPress={() => Alert.alert('Simple Button pressed')}
            onPress={() => {
              color='blue'
            }}*/
          />
          <Button
            title="One other person"
            color="#004724"
          />
          <Button
            title="Two other people"
            color="#006633"
          />
          <Button
            title="Three or more other people"
            color="#027D40"
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>   5. How much time do you want to spend on reducing your carbon footprint?</Text>
        </View>
        <View style={styles.welcomeContainer}>
          <Button
            title="Absolutely no time"
            color="#003319"
            /*onPress={() => Alert.alert('Simple Button pressed')}
            onPress={() => {
              color='blue'
            }}*/
          />
          <Button
            title="I can make a little time"
            color="#004724"
          />
          <Button
            title="A good amount"
            color="#006633"
          />
          <Button
            title="I have so much time"
            color="#027D40"
          />
          <Button
            title="Not sure"
            color="#00994C"
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>   6. How much money do you want to spend on reducing your carbon footprint?</Text>
        </View>
        <View style={styles.welcomeContainer}>
          <Button
            title="Absolutely no money"
            color="#003319"
            /*onPress={() => Alert.alert('Simple Button pressed')}
            onPress={() => {
              color='blue'
            }}*/
          />
          <Button
            title="I can spend a little money"
            color="#004724"
          />
          <Button
            title="A good amount"
            color="#006633"
          />
          <Button
            title="I have so much money to spend on this"
            color="#027D40"
          />
          <Button
            title="Not sure"
            color="#00994C"
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>   7. How much electricity do you feel that your family uses?</Text>
        </View>
        <View style={styles.welcomeContainer}>
          <Button
            title="So much, we need to stop"
            color="#003319"
            /*onPress={() => Alert.alert('Simple Button pressed')}
            onPress={() => {
              color='blue'
            }}*/
          />
          <Button
            title="Moderate"
            color="#004724"
          />
          <Button
            title="Only a little bit"
            color="#006633"
          />
          <Button
            title="Not sure"
            color="#027D40"
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>   8. What are your eating habits?</Text>
        </View>
        <View style={styles.welcomeContainer}>
          <Button
            title="I am vegetarian"
            color="#003319"
            /*onPress={() => Alert.alert('Simple Button pressed')}
            onPress={() => {
              color='blue'
            }}*/
          />
          <Button
            title="I am vegan"
            color="#004724"
          />
          <Button
            title="I am pescatarian"
            color="#006633"
          />
          <Button
            title="I eat meat several times a day"
            color="#027D40"
          />
          <Button
            title="I eat meat once a day" 
            color="#00994C"
          />
          <Button
            title="I eat meat a few times a week"
            color="#02AC57" //"#006633"
          />
        </View>
        {/**
        * Go ahead and delete ExpoLinksView and replace it with your content;
        * <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
          </View>
        * 
        * we just wanted to provide you with some helpful links.
        */}
      </ScrollView>
    </View>
  );
}



// Calculations.navigationOptions = {
//   title: 'Calculations',
// };

/*const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titleText: { //changed name to titleText to match above call, from there could change font size and style
    fontSize: 30,
    fontFamily: 'Cochin',
  },
});

/* Alana edited 1/6 - 1/8 to:
hard code survey questions and answers
organize code (indentations)
make answer possibilities gradient colors of green
*/