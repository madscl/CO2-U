import React from 'react';
import {
  AsyncStorage,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
  },
});

function Item({ title }) {
  var nameAndDate = title.split("~");
  var name = nameAndDate[0];
  var date = nameAndDate[1];
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{date}</Text>
    </View>
  );
}

export default class ActiveGoalsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      data: [],
    };
  }
  static navigationOptions = {
    title: 'Completed Challenges',
  };

  componentWillMount() {
   console.log('active goals screen will mount');
   this.fetchAllData()
  }

  componentDidMount() {
    console.log('active goals screen mounted')
  }

  async fetchAllData() {
    console.log('fetchAllData');
    try {

      const keys = await AsyncStorage.getAllKeys();
      this.setState({data: keys})
      console.log('keys = ', keys);
    } catch (error) {
      console.error(error)
    }
  }

  componentWillUnmount() {
    console.log('active goals screen will unmount')
  }

  render() {
    return (
       <SafeAreaView style={styles.container}>
         <FlatList
           data = {this.state.data}
           renderItem = {({ item }) => <Item title={item} />}
           keyExtractor = { item => item }
         ></FlatList>
       </SafeAreaView>
    );
  }
}
