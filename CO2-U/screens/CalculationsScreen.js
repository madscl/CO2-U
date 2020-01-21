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
  TextInput,
  Button,
  Alert, 
  SafeAreaView, 
  FlatList, 
  AsyncStorage,
  StatusBar,
} from 'react-native';

const STORAGE_KEY = '@save_name'

import Constants from 'expo-constants';
import { MonoText } from '../components/StyledText';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation';
import Item from '../components/Item';

export default class CalculationsScreen extends React.Component {
  // state = { 
  //   text: '',
  //   name: ''
  // }
  state = {
    answer: 0
  }
  // state = {
  //   isDataReady: false,
  //   mockItems: ['First Item', 'Second Item', 'Third Item']
  // }

  componentDidMount() {
    this.retrieveData()
  }

  retrieveData = async () => {
    try {
      const answer = await AsyncStorage.getItem(STORAGE_KEY)
      if (answer !== 0) {
        this.setState({answer})
      }
    } catch (e) {
      alert('Failed to save answer.')
    }
  }

  save = async name => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, name)
      alert('Data successfully saved!')
      this.setState({name})
    } catch(e) {
      alert('Failed to save name.')
    }
  }

  // removeEverything = async() => {
  //   try{
  //     await AsyncStorage.clear()
  //     alert('Storage successfully cleared!')
  //   } catch (e) {
  //     alert('Failed to clear the async storage.')
  //   }
  // }

  //onButtonPressed = text => this.setState({text})

  // onSubmitEditing = () => {
  //   const onSave = this.save
  //   const {text} = this.state

  //   if(!text) return

  //   onSave(text)
  //   this.setState({text: ''})
  // }

  render() { 
    const{answer} = this.state
    return ( 
      <View style={styles.container}>
        <ScrollView style={styles.container}
          contentContainerStyle={styles.contentContainer}>
            <View style={styles.titleContainer}>
              {/* <FlatList  
                data={this.state.mockItems}
                contentContainerStyle={styles.content}
                renderItem={row => {
                  return <Item text={row.item} />
                }}
                keyExtractor={item => item.id}
              /> */}
              <Text style={styles.titleText}>Question 1</Text>
              <TextInput
                style={styles.input}
                value={answer}
                // placeholder='Type your name, hit enter, and refresh'
                // onChangeText={this.onChangeText}
                // onSubmitEditing={this.onSubmitEditing}
              />
              {/* <Text style={styles.text}>Hello {name}!</Text> */}
              {/* <TouchableOpacity onPress={this.removeEverything} style={styles.button}>
                <Text style={styles.buttonText}>Clear Storage</Text>
              </TouchableOpacity> */}
            </View>
            <View style={styles.welcomeContainer}>
              <Button
              title="Item 1"
              color="#f194ff"
              onPress={() => this.save}
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
        </ScrollView>
      </View>
    );
  }
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
