// import React from 'react';
// import { ExpoConfigView } from '@expo/samples';

// export default function AchievementsScreen() {
//   /**
//    * Go ahead and delete ExpoConfigView and replace it with your content;
//    * we just wanted to give you a quick view of your config.
//    */
//   return <ExpoConfigView />;
// }

// AchievementsScreen.navigationOptions = {
//   title: 'app.json',
// };

import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
//import { ExpoLinksView } from '@expo/samples';

export default function AchievementsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image
            source={require('../assets/images/earth.png')}
            style={styles.welImage}
          />
      <Text style={styles.achievementName}>Meatless Mondays</Text>
      <Text style={styles.achievementDescription}>Eat vegetarian every Monday</Text>
      
    </ScrollView>
  );
}

AchievementsScreen.navigationOptions = {
  title: 'Achievements',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  /*iconImage: {
    width: 90,
    height: 72,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: 150,
    //textAlign: 'center',
  },
  */
  welImage: {
    alignItems:'center',
    justifyContent:'center',
    width: 400,
    height: 400,
    marginTop: -70,
    marginLeft: 20,
    //resizeMode: 'center',
    //margin: 'auto',
  },
  achievementName: {
    fontSize: 20,
    color: 'rgba(34,139,34,1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  achievementDescription: {
    fontSize: 14,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
