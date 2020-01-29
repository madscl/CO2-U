import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  TextInput,
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

export default class CalculationsScreen extends React.Component {
  state = {
    'transportation': '',
    'fossilmileage' : '',
    'mileage' : '',
    'peopledrivewith' : '',
    'timespent' : '',
    'moneyspend' : '',
    'electricity' : '',
    'eating' : ''
  }
  //componentDidMount = () => AsyncStorage.getItem('value').then((value) => this.setState({'value':value}))

  //this code is the beginning of paramterizing it but it doesn't work so we hae the long way
  // setValue = (key, value) => {
  //   console.log('setValue called with key = ', key, ' value = ', value);
  //   AsyncStorage.setItem(key, value);
  //   this.setState(() => {
  //     console.log('transportation value = ', value)
      
  //     return {
  //       state: value
  //     };
  //   }); 
  // }

  setTransportationValue = (value) => {
    console.log('setTransportationValue called  value = ', value);
    AsyncStorage.setItem('transportation', value);
    this.setState(() => {
      console.log('transportation value = ', value)      
      return {
        transportation: value
      };
    }); 
  }

  setFossilMileageValue = (value) => {
    console.log('setFossilMileageValue called value = ', value);
    AsyncStorage.setItem('fossilmileage', value);
    this.setState(() => {
      console.log('fosssilemileage value = ', value);
      return {
        transportation: value
      }
    })
  }
  setMileageValue = (value) => {
    console.log('setMileageValue called value = ', value);
    AsyncStorage.setItem('mileage', value);
    this.setState(() => {
      console.log('mileage value = ', value);
      return {
        mileage: value
      }
    })
  }
  setPeopleDriveWithValue = (value) => {
    console.log('setPeopleDriveWithValue called value = ', value);
    AsyncStorage.setItem('peopledrivewith', value);
    this.setState(() => {
      console.log('peopledrivewith value = ', value);
      return {
        peopledrivewith: value
      }
    })
  }
  setTimeSpentValue = (value) => {
    console.log('setTimeSpentValue called value = ', value);
    AsyncStorage.setItem('timespent', value);
    this.setState(() => {
      console.log('timespent value = ', value);
      return {
        timespent: value
      }
    })
  }
  setMoneySpendValue = (value) => {
    console.log('setMoneySpendValue called value = ', value);
    AsyncStorage.setItem('moneyspend', value);
    this.setState(() => {
      console.log('moneyspend value = ', value);
      return {
        moneyspend: value
      }
    })
  }
  setElectricityValue = (value) => {
    console.log('setElectricValue called value = ', value);
    AsyncStorage.setItem('electric', value);
    this.setState(() => {
      console.log('electric value = ', value);
      return {
        electric: value
      }
    })
  }
  setEatingValue = (value) => {
    console.log('setEatingValue called value = ', value);
    AsyncStorage.setItem('eating', value);
    this.setState(() => {
      console.log('eating value = ', value);
      return {
        eating: value
      }
    })
  }
  render() {
    return ( 
      <View style={styles.container}>
        <ScrollView style={styles.container}
          contentContainerStyle={styles.contentContainer}> 
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>   1. What is your most used method of transportation? </Text>
          </View>
          <View style={styles.welcomeContainer}>
            <Button
              title="Car"
              color="#003319"
              //onPress={() => (this.setValue('transportation', '5'))}   
              onPress={() => ( this.setTransportationValue('9') )}
            />
            <Button
              title="Motorcycles"
              color="#004724"
              onPress={() => ( this.setTransportationValue('8') )}
            />
            <Button
              title="Public Bus"
              color="#006633" //"#00994C"
              onPress={() => ( this.setTransportationValue('4') )}
            />
            <Button
              title="Bike"
              color="#027D40" //"#00CC66"
              onPress={() => ( this.setTransportationValue('2') )}
            />
            <Button
              title="Walk"
              color="#00994C" //"#003319"
              onPress={() => ( this.setTransportationValue('1') )}
            />
            <Button
              title="Ferry"
              color="#02AC57" //"#006633"
              onPress={() => ( this.setTransportationValue('7') )}
            />
            <Button
              title="Train"
              color="#00CC66" //"#00CC66"
              onPress={() => ( this.setTransportationValue('6') )}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>   2. If you drive a car or motorcycle what is your average gas mileage?</Text>
          </View>
          <View style={styles.welcomeContainer}>
            <Button
              title="Below 15 mpg"
              color="#003319"
              onPress={() => ( this.setFossilMileageValue('1') )}
            />
            <Button
              title="15-20 mpg"
              color="#004724"
              onPress={() => ( this.setFossilMileageValue('2') )}
            />
            <Button
              title="20-25 mpg"
              color="#006633"
              onPress={() => ( this.setFossilMileageValue('3') )}
            />
            <Button
              title="25-30 mpg"
              color="#027D40"
              onPress={() => ( this.setFossilMileageValue('4') )}
            />
            <Button
              title="30-35 mpg"
              color="#00994C"
              onPress={() => ( this.setFossilMileageValue('5') )}
            />
            <Button
              title="35-40 mpg"
              color="#02AC57"
              onPress={() => ( this.setFossilMileageValue('6') )}
            />
            <Button
              title="Above 40 mpg"
              color="#00CC66"
              onPress={() => ( this.setFossilMileageValue('7') )}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>   3. How many miles on average do you travel each day?</Text>
          </View>
          <View style={styles.welcomeContainer}>
            <Button
              title="Up to 5 miles"
              color="#003319"
              onPress={() => ( this.setMileageValue('1') )}
            />
            <Button
              title="5-15 miles"
              color="#004724"
              onPress={() => ( this.setMileageValue('2') )}
            />
            <Button
              title="15-25 miles"
              color="#006633"
              onPress={() => ( this.setMileageValue('3') )}
            />
            <Button
              title="25-35 miles"
              color="#027D40"
              onPress={() => ( this.setMileageValue('4') )}
            />
            <Button
              title="Over 35 miles"
              color="#00994C"
              onPress={() => ( this.setMileageValue('5') )}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>   4. How many people are you usually driving with?</Text>
          </View>
          <View style={styles.welcomeContainer}>
            <Button
              title="None, I am a lone wolf"
              color="#003319"
              onPress={() => ( this.setPeopleDriveWithValue('4') )}
            />
            <Button
              title="One other person"
              color="#004724"
              onPress={() => ( this.setPeopleDriveWithValue('3') )}
            />
            <Button
              title="Two other people"
              color="#006633"
              onPress={() => ( this.setPeopleDriveWithValue('2') )}
            />
            <Button
              title="Three or more other people"
              color="#027D40"
              onPress={() => ( this.setPeopleDriveWithValue('1') )}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>   5. How much time do you want to spend on reducing your carbon footprint?</Text>
          </View>
          <View style={styles.welcomeContainer}>
            <Button
              title="Absolutely no time"
              color="#003319"
              onPress={() => ( this.setTimeSpentValue('4') )}
            />
            <Button
              title="I can make a little time"
              color="#004724"
              onPress={() => ( this.setTimeSpentValue('3') )}
            />
            <Button
              title="A good amount"
              color="#006633"
              onPress={() => ( this.setTimeSpentValue('2') )}
            />
            <Button
              title="I have so much time"
              color="#027D40"
              onPress={() => ( this.setTimeSpentValue('1') )}
            />
            <Button
              title="Not sure"
              color="#00994C"
              onPress={() => ( this.setTimeSpentValue('0') )}
            />

          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>   6. How much money do you want to spend on reducing your carbon footprint?</Text>
          </View>
          <View style={styles.welcomeContainer}>
            <Button
              title="Absolutely no money"
              color="#003319"
              onPress={() => ( this.setMoneySpendValue('4') )}
            />
            <Button
              title="I can spend a little money"
              color="#004724"
              onPress={() => ( this.setMoneySpendValue('3') )}
            />
            <Button
              title="A good amount"
              color="#006633"
              onPress={() => ( this.setMoneySpendValue('2') )}
            />
            <Button
              title="I have so much money to spend on this"
              color="#027D40"
              onPress={() => ( this.setMoneySpendValue('1') )}
            />
            <Button
              title="Not sure"
              color="#00994C"
              onPress={() => ( this.setMoneySpendValue('0') )}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>   7. How much electricity do you feel that your family uses?</Text>
          </View>
          <View style={styles.welcomeContainer}>
            <Button
              title="So much, we need to stop"
              color="#003319"
              onPress={() => ( this.setElectricityValue('3') )}
            />
            <Button
              title="Moderate"
              color="#004724"
              onPress={() => ( this.setElectricityValue('2') )}
            />
            <Button
              title="Only a little bit"
              color="#006633"
              onPress={() => ( this.setElectricityValue('1') )}
            />
            <Button
              title="Not sure"
              color="#027D40"
              onPress={() => ( this.setElectricityValue('0') )}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>   8. What are your eating habits?</Text>
          </View>
          <View style={styles.welcomeContainer}>
            <Button
              title="I am vegetarian"
              color="#003319"
              onPress={() => ( this.setEatingValue('2') )}
            />
            <Button
              title="I am vegan"
              color="#004724"
              onPress={() => ( this.setEatingValue('1') )}
            />
            <Button
              title="I am pescatarian"
              color="#006633"
              onPress={() => ( this.setEatingValue('3') )}
            />
            <Button
              title="I eat meat several times a day"
              color="#027D40"
              onPress={() => ( this.setEatingValue('6') )}
            />
            <Button
              title="I eat meat once a day" 
              color="#00994C"
              onPress={() => ( this.setEatingValue('5') )}
            />
            <Button
              title="I eat meat a few times a week"
              color="#02AC57" //"#006633"
              onPress={() => ( this.setEatingValue('4') )}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}



// Calculations.navigationOptions = {
//   title: 'Calculations',
// };

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
    fontSize: 20,
    padding: 20, //added padding so text not start on edge of screen
    fontFamily: 'Cochin',
  },
  textInput: {
    margin: 5,
    height: 100,
    borderWidth: 1,
    backgroundColor: '#7685ed'
  },
});

/* Alana edited 1/6 - 1/8 to:
hard code survey questions and answers
organize code (indentations)
make answer possibilities gradient colors of green
*/