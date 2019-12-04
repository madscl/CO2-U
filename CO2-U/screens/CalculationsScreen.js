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
            <Text style={styles.titleText}>Question 1</Text>
          </View>
        <View style={styles.welcomeContainer}>
              <Button
              title="Item 1"
              color="#f194ff"
              onPress={() => Alert.alert('Simple Button pressed')}
              //onPress={() => {
                //color='blue'
              //}}
            />
            <Button
              title="Item 2"
              color="#f194ff"
              //onPress={() => Alert.alert('Simple Button pressed')}
              //onPress={() => {
                //color='blue'
              //}}
            />
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Question 2</Text>
          </View>
        <View style={styles.welcomeContainer}>
              <Button
              title="Item 1"
              color='red'
              /*onPress={() => Alert.alert('Simple Button pressed')}
              onPress={() => {
                color='blue'
              }}*/
            />
            <Button
              title="Item 2"
              color='red'
              /*onPress={() => Alert.alert('Simple Button pressed')}
              onPress={() => {
                color='blue'
              }}*/
            />
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Question 3</Text>
          </View>
        <View style={styles.welcomeContainer}>
              <Button
              title="Item 1"
              color='orange'
              /*onPress={() => Alert.alert('Simple Button pressed')}
              onPress={() => {
                color='blue'
              }}*/
            />
            <Button
              title="Item 2"
              color='orange'
              /*onPress={() => Alert.alert('Simple Button pressed')}
              onPress={() => {
                color='blue'
              }}*/
            />
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Question 4</Text>
          </View>
        <View style={styles.welcomeContainer}>
              <Button
              title="Item 1"
              color='yellow'
              /*onPress={() => Alert.alert('Simple Button pressed')}
              onPress={() => {
                color='blue'
              }}*/
            />
            <Button
              title="Item 2"
              color='yellow'
              /*onPress={() => Alert.alert('Simple Button pressed')}
              onPress={() => {
                color='blue'
              }}*/
            />
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Question 5</Text>
          </View>
        <View style={styles.welcomeContainer}>
              <Button
              title="Item 1"
              color='green'
              /*onPress={() => Alert.alert('Simple Button pressed')}
              onPress={() => {
                color='blue'
              }}*/
            />
            <Button
              title="Item 2"
              color='green'
              /*onPress={() => Alert.alert('Simple Button pressed')}
              onPress={() => {
                color='blue'
              }}*/
            />
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Question 6</Text>
          </View>
        <View style={styles.welcomeContainer}>
              <Button
              title="Item 1"
              color='blue'
              /*onPress={() => Alert.alert('Simple Button pressed')}
              onPress={() => {
                color='blue'
              }}*/
            />
            <Button
              title="Item 2"
              color='blue'
              /*onPress={() => Alert.alert('Simple Button pressed')}
              onPress={() => {
                color='blue'
              }}*/
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
  title: {
    fontSize: 32,
  },
});
