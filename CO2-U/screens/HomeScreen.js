import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, FlatList, AsyncStorage} from 'react-native'
import {AppLoading} from 'expo'
import {Button, Text as NBText} from 'native-base'
import * as Font from 'expo-font' //need to download native-base

import FloatingButton from '../components/FloatingButton'
import Header from '../components/Header'
import Item from '../components/Item'

export class HomeScreen extends Component {
  state = {
    todos: {},
    isDataReady: false,
  }

  static navigationOptions = {
    header: null
  }
  componentDidMount = () => {
    this.loadTodos()
  }

  oadTodos = async () => {
    try {
      await Font.loadAsync({
        Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf')
      })
      const getTodos = await AsyncStorage.getItem('todos')
      const parsedTodos = JSON.parse(getTodos)
      this.setState({ isDataReady: true, todos: parsedTodos || {} })
      } catch (err) {
        alert('Application Error. Cannot load data.')
    }
  }

saveTodos = newToDos => {
  const saveTodos = AsyncStorage.setItem('todos', JSON.stringify(newToDos))
  }
  addTodo = newTask => {
  const newTodoItem = newTask
  if (newTodoItem !== '') {
    this.setState(prevState => {
    const ID = uuidv1()
    const newToDoObject = {
    [ID]: {
    id: ID,
    isCompleted: false,
    textValue: newTodoItem,
    createdAt: Date.now()
      }
    }
    const newState = {
      ... prevState,
      todos: { ...prevState.todos, ...newToDoObject}
  }
  this.saveTodos(newState.todos)
  return {newState }
  })
  }
 }

 deleteTodo = id => {
  this.setState(prevState => {
      const todos = prevState.todos
      delete todos[id]
      const newState = {
          ...prevState,
          ...todos
      }
      this.saveTodos(newState.todos)
      return { ...newState }
  })
}

inCompleteTodo = id => {
  this.setState(prevState => {
      const newState = {
          ...prevState,
          todos: {
              ...prevState.todos,
              [id]: {
                  ...prevState.todos[id],
                  isCompleted: false
              }
          }
      }
      this.saveTodos(newState.todos)
      return { ...newState }
  })
}

completeTodo = id => {
  this.setState(prevState => {
      const newState = {
          ...prevState,
          todos: {
              ...prevState.todos,
              [id]: {
                  ...prevState.todos[id],
                  isCompleted: true
              }
          }
      }
      this.saveTodos(newState.todos)
      return { ...newState }
  })
}

  
onPressFab = () => {
  this.props.navigation.navigate('AddTask', {
      saveItem: this.addTodo
  })
}

  render() {
    const {isDataReady} = this.state
    if(!isDataReady) {
      return <AppLoading/>
    } return (
      <View style={styles.container}>
        <Header/>
        <StatusBar barStyle = 'light-content'/>
        <FlatList
          data={this.state.mockItems}
          contentContainerStyle={styles.content}
          renderItem={row => {
            return <Item text={row.item} />
          }}
          keyExtractor={item => item.id}
        />
        <FloatingButton actionOnPress={this.onPressFab} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  }
})
export default HomeScreen








// import * as WebBrowser from 'expo-web-browser';
// import React from 'react';
// import {
//   Image,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Button,
//   SafeAreaView,
//   Alert,
// } from 'react-native';

// import * as Font from 'expo-font';
// import Constants from 'expo-constants';
// import { MonoText } from '../components/StyledText';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation';
// import CalculationsScreen from '../screens/CalculationsScreen';
// import { AuthSession } from 'expo';

// /*export default class App extends React.Component {
//   state = {
//     fontLoaded = false,
//   };
//   async componentDidMount() {
//     await Font.loadAsync({
//       'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
//     });

//     this.setState({ fontLoaded: true });
//   }
//   componentDidMount() {
//     Font.loadAsync({
//       'open-sans-bold': require('./assets/fonts/Calistoga-Regular.ttf'),
//     });
//   }
// }*/

// function Separator() {
//   return <View style={styles.separator} />;
// }

// // const MainNavigator = createStackNavigator({
// //   Home: {screen: HomeScreen},
// //   Calculations: {screen: CalculationsScreen},
// // });

// // const App = createAppContainer(MainNavigator);

// // export default App;

// // class HomeScreen extends React.Component {
// //   static navigationOptions = {
// //     title: 'Welcome',
// //   };
// //   render() {
// //     const {navigate} = this.props.navigation;
// //     return (
// //       <Button
// //         title="Go to Jane's profile"
// //         onPress={() => navigate('Calculations', {name: 'Calculations'})}
// //       />
// //     );
// //   }
// // }

// //const { navigate } = this.props.navigation;


// export default function HomeScreen(MainNavigator) {
//   return (
//     <View style={styles.container}>
//       <ScrollView
//         style={styles.container}
//         contentContainerStyle={styles.contentContainer}>
//         <View style={styles.welcomeContainer}>
//           <Image
//             source={require('../assets/images/earth.png')}
//             style={styles.welImage}
//           />
//             <Button
//             title="Calculate"
//             color="#f194ff"
//             //onPress={() => Alert.alert('Simple Button pressed')}
//             onPress={() => {
//                MainNavigator.navigation.navigate('Calculations')
//             }}
//           />
//         </View>
//         <View style={styles.titleContainer}>
//           <Text style={styles.ttlText}>CO2+U</Text>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// HomeScreen.navigationOptions = {
//   header: null,
// };

// const styles = StyleSheet.create({
//   //no idea what this does, might not need it
//   // container: {
//   //   flex: 1,
//   //   backgroundColor: '#fff',
//   // },
//   // contentContainer: {
//   //   paddingTop: 30,
//   // },
//   //determines layout for the title "CO2+U" 
//   ttlText: {
//     fontSize: 50,
//     fontFamily: 'Cochin', //changed font to not error
//   },
//   titleContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   welImage: {
//     alignItems:'center',
//     justifyContent:'center',
//     width: 400,
//     height: 400,
//     //resizeMode: 'center',
//     //margin: 'auto',
//   }
//   // homeScreenFilename: {
//   //   marginVertical: 7,
//   // },
//   // codeHighlightText: {
//   //   color: 'rgba(96,100,109, 0.8)',
//   // },
//   // codeHighlightContainer: {
//   //   backgroundColor: 'rgba(0,0,0,0.05)',
//   //   borderRadius: 3,
//   //   paddingHorizontal: 4,
//   // },
//   // tabBarInfoText: {
//   //   fontSize: 17,
//   //   color: 'rgba(96,100,109, 1)',
//   //   textAlign: 'center',
//   // },
//   // navigationFilename: {
//   //   marginTop: 5,
//   // },
// });
