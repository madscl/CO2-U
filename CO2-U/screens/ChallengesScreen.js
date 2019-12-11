import React from 'react';
//import { ScrollView, StyleSheet } from 'react-native';
//import { ExpoLinksView } from '@expo/samples';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Component} from 'react';
import DailyChallengesScreen from './DailyChallengesScreen';
import PersonalizedChallengesScreen from './PersonalizedChallengesScreen';
import SegmentedControlIOS from "@react-native-community/segmented-control";


export default function ChallengesScreen() {
  return (
    <SegmentedControlIOS
      values={["One", "Two"]}
      selectedIndex={0}
      // onChange={event => {
      //   this.setState({ selectedIndex: 0 });
      // }}
    />
  );
}

// class ChallengesScreen extends Component {
//   constructor() {
//     super();
//     this.state = {
//       customStyleIndex: 0,
//       //Default selected Tab Indexes for cusatom SegmentedControlTab
//     };
//   }

//   handleCustomIndexSelect = (index) => {
//     //handle tab selection for custom Tab Selection SegmentedControlTab
//     this.setState(prevState => ({ ...prevState, customStyleIndex: index }));
//   };

//   render() {
//     const { customStyleIndex } = this.state;
//     return (
//       <View style={styles.container}>
//         {/* Simple Segmented with Custom Styling*/}
//         <SegmentedControlIOS
//           values={['one', 'two']}
//           selectedIndex={customStyleIndex}
//           onTabPress={this.handleCustomIndexSelect}
//           borderRadius={0}
//           tabsContainerStyle={{ height: 50, backgroundColor: '#F2F2F2' }}
//           tabStyle={{
//             backgroundColor: '#F2F2F2',
//             borderWidth: 0,
//             borderColor: 'transparent',
//           }}
//           activeTabStyle={{ backgroundColor: 'white', marginTop: 2 }}
//           tabTextStyle={{ color: '#444444', fontWeight: 'bold' }}
//           activeTabTextStyle={{ color: '#888888' }}
//         />
//         {customStyleIndex === 0 && (
//           <Text style={styles.tabContent}> Tab one</Text>
//         )}
//         {customStyleIndex === 1 && (
//           <Text style={styles.tabContent}> Tab two</Text>
//         )}
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  headerText: {
    padding: 8,
    fontSize: 14,
    color: '#444444',
    textAlign: 'center',
  },
  tabContent: {
    color: '#444444',
    fontSize: 18,
    margin: 24,
  },
  Seperator: {
    marginHorizontal: -10,
    alignSelf: 'stretch',
    borderTopWidth: 1,
    borderTopColor: '#888888',
    marginTop: 24,
  },
  tabStyle: {
    borderColor: '#D52C43',
  },
  activeTabStyle: {
    backgroundColor: '#D52C43',
  },
});

//export default ChallengesScreen;
