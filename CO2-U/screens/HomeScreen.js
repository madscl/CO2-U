import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  SafeAreaView,
  Alert,
} from 'react-native';

import * as Font from 'expo-font';
import Constants from 'expo-constants';
import { MonoText } from '../components/StyledText';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation';
import CalculationsScreen from '../screens/CalculationsScreen';
import { AuthSession } from 'expo';

/*export default class App extends React.Component {
  state = {
    fontLoaded = false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  componentDidMount() {
    Font.loadAsync({
      'open-sans-bold': require('./assets/fonts/Calistoga-Regular.ttf'),
    });
  }
}*/

function Separator() {
  return <View style={styles.separator} />;
}

// const MainNavigator = createStackNavigator({
//   Home: {screen: HomeScreen},
//   Calculations: {screen: CalculationsScreen},
// });

// const App = createAppContainer(MainNavigator);

// export default App;

// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome',
//   };
//   render() {
//     const {navigate} = this.props.navigation;
//     return (
//       <Button
//         title="Go to Jane's profile"
//         onPress={() => navigate('Calculations', {name: 'Calculations'})}
//       />
//     );
//   }
// }

//const { navigate } = this.props.navigation;


export default function HomeScreen(MainNavigator) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={require('../assets/images/earth.png')}
            style={styles.welImage}
          />
            <Button
            title="Calculate"
            color="#f194ff"
            //onPress={() => Alert.alert('Simple Button pressed')}
            onPress={() => {
               MainNavigator.navigation.navigate('Calculations')
            }}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.ttlText}>CO2+U</Text>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  //no idea what this does, might not need it
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  // },
  // contentContainer: {
  //   paddingTop: 30,
  // },
  //determines layout for the title "CO2+U" 
  ttlText: {
    fontSize: 50,
    font: 'Calistoga-Regular',
  },
  titleContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  welImage: {
    alignItems:'center',
    justifyContent:'center',
    width: 400,
    height: 400,
    //resizeMode: 'center',
    //margin: 'auto',
  }
  // homeScreenFilename: {
  //   marginVertical: 7,
  // },
  // codeHighlightText: {
  //   color: 'rgba(96,100,109, 0.8)',
  // },
  // codeHighlightContainer: {
  //   backgroundColor: 'rgba(0,0,0,0.05)',
  //   borderRadius: 3,
  //   paddingHorizontal: 4,
  // },
  // tabBarInfoText: {
  //   fontSize: 17,
  //   color: 'rgba(96,100,109, 1)',
  //   textAlign: 'center',
  // },
  // navigationFilename: {
  //   marginTop: 5,
  // },
});
