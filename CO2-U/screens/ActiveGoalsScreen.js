import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Form, Item, Input, Button, Text as NBText} from 'native-base'


export class ActiveGoalsScreen extends Component {
    state = {
        text: ''
    }
    onChangeText = event => {
        this.setState({ task: event.nativeEvent.text })
    }

    onAddTask = () => {
        this.props.navigation.state.params.saveItem(this.state.task)
        this.props.navigation.goBack()
    }
    render() {
        return (
            <View>
                <View style={{ marginRight: 10 }}>
                    <Form>
                        <Item>
                            <Input
                            value={this.state.task}
                                placeholder='Enter a new task...'                                
                                autoFocus
                                clearButtonMode='always'
                                autoCorrect={false}
                                onChange={this.onChangeText}
                                onSubmitEditing={this.onAddTask}
                                returnKeyType={'done'}
                            />
                        </Item>
                    </Form>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Button
                        style={{ backgroundColor: '#5067FF', margin: 25, justifyContent: 'center' }}
                        onPress={this.onAddTask}
                    >
                        <NBText style={{ fontWeight: 'bold' }}>Add Task</NBText>
                    </Button>
                </View>
            </View>
        )
    }
}
export default ActiveGoalsScreen






// // Second screen which we will use to get the data
// import React, { Component } from 'react';
// //import react in our code.
// import { StyleSheet, View, Text } from 'react-native';
// //import all the components we are going to use.
 
// export default class ActiveGoalsScreen extends Component {
//   static navigationOptions = {
//     //Setting the header of the screen
//     title: 'Completed challenges',
//   };
//   render() {
//     return (
//       //View to hold our multiple components
//       <View style={styles.container}>
//         {/* <Text>
//           You are on SecondPage and the value passed from the first screen is
//         </Text>
//         {/*Using the navigation prop we can get the value passed from the first Screen*/}
//         {/* <Text style={styles.TextStyle}>
//           {this.props.navigation.state.params.JSON_ListView_Clicked_Item}
//         </Text>
//         <Text style={{ marginTop: 16 }}>With Check</Text>
//         {/*If you want to check the value is passed or not, 
//          you can use conditional operator.*/}
//         {/* <Text style={styles.TextStyle}>
//           {this.props.navigation.state.params.JSON_ListView_Clicked_Item
//             ? this.props.navigation.state.params.JSON_ListView_Clicked_Item
//             : 'No Value Passed'}
//         </Text> */} 
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     margin: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   TextStyle: {
//     fontSize: 23,
//     textAlign: 'center',
//     color: '#f00',
//   },
// });







// // import React, {Complnent} from 'react';
// // import { ScrollView, StyleSheet, View, Image, Text, AsyncStorage} from 'react-native';
// // import { ExpoLinksView } from '@expo/samples';
// // import './DailyChallengesScreen'



// // export default class ActiveGoalsScreen extends React.Component {
// //   static navigationOptions = {
// //     title: 'Completed Challenges',
// //   };

// //   render() {
// //     return (
// //       <ScrollView style={styles.container}
// //         contentContainerStyle={styles.contentContainer}>
 
      
// //       </ScrollView> //chnaged all width to be longer as to fill whole web emulator
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     paddingTop: 15,
// //     backgroundColor: 'white',
// //   },
// // });