import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, TextInput, AsyncStorage, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppNavigator from './navigation/AppNavigator';
import RootNavigator from './navigation'

export default function App() {
  return <RootNavigator/>
}


const STORAGE_KEY = '@save_name'

// class App extends React.Component {
//   state = {
//     text: '',
//     name: ''
//   }

//   componentDidMounnt() {
//     this.retrieveData()
//   }

//   retrieveData = async () => {
//     try {
//       const name = await AsyncStorage.getItem(STORAGE_KEY);

//       if (name !== null) {
//         this.setState({ name })
//       }
//     } catch (e) {
//       alert('Failed to load name.')
//     }
//   }

//   save = async name => {
//     try {
//       await AsyncStorage.setItem(STORAGE_KEY, name)
//       alert('Data successfully saved!')
//       this.setState({name})
//     } catch (e) {
//       alert('Failed to save name.')
//     }
//   }

//   removeEverything = async () => {
//     try {
//       await AsyncStorage.clear()
//       alert('Storage successfully cleared!')
//     } catch (e) {
//       alert('Failed to clear the async storage.')
//     }
//   }

//   onChangeText = text => this.setState({ text })

//   onSubmitEditing = () => {
//     const onSave = this.save
//     const { text } = this.state
//     if (!text) return
//     onSave(text)
//     this.setState({ text: '' })
//   }   
// //   const [isLoadingComplete, setLoadingComplete] = useState(false);

// //   if (!isLoadingComplete && !props.skipLoadingScreen) {
// //     return (
// //       <AppLoading
// //         startAsync={loadResourcesAsync}
// //         onError={handleLoadingError}
// //         onFinish={() => handleFinishLoading(setLoadingComplete)}
// //       />
// //     );
// //   } else {
// //     return (
// //       <View style={styles.container}>
// //         {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
// //         <AppNavigator />
// //       </View>
// //     );
// //   }
// // }

// // loadResourcesAsync = async () => {
// //   await Promise.all([
// //     Asset.loadAsync([
// //       require('./assets/images/robot-dev.png'),
// //       require('./assets/images/robot-prod.png'),
// //     ]),
// //     Font.loadAsync({
// //       // This is the font that we are using for our tab bar
// //       ...Ionicons.font,
// //       // We include SpaceMono because we use it in HomeScreen.js. Feel free to
// //       // remove this if you are not using it in your app
// //       'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
// //     }),
// //   ]);
// // }

// // handleLoadingError = (error) => {
// //   // In this case, you might want to report the error to your error reporting
// //   // service, for example Sentry
// //   console.warn(error);
// // }

// // handleFinishLoading = (setLoadingComplete) => {
// //   setLoadingComplete(true);
// //   }
//   render() {
//     const { text, name } = this.state
//     return (
//         <View style={styles.container}>
//             <TextInput
//                 style={styles.input}
//                 value={text}
//                 placeholder='Type your name, hit enter, and refresh'
//                 onChangeText={this.onChangeText}
//                 onSubmitEditing={this.onSubmitEditing}
//             />
//             <Text style={styles.text}>Hello {name}!</Text>
//             <TouchableOpacity onPress={this.removeEverything} style={styles.button}>
//                 <Text style={styles.buttonText}>Clear Storage</Text>
//             </TouchableOpacity>
//         </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
// },
//   text: {
//     fontSize: 20,
//     padding: 10,
//     backgroundColor: '#00ADCF'
//   },
//   input: {
//       padding: 15,
//       height: 50,
//       borderBottomWidth: 1,
//       borderBottomColor: '#333',
//       margin: 10
//   },
//   button: {
//       margin: 10,
//       padding: 10,
//       backgroundColor: '#FF851B'
//   },
//   buttonText: {
//       fontSize: 14,
//       color: '#fff'
//   },
// });

// // export default function App() {
// //   return <RootNavigator/>
// // }
// export default App;