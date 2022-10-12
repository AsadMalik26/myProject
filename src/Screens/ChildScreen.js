import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Chats from './parent-screens/Chats';
import ChatScreen from './child-screens/ChatScreen';
const Stack = createStackNavigator();
function Test({navigation}) {
  <View style={{backgroundColor: 'red', flex: 1}}>
    <Text>ChildScreen</Text>
  </View>;
}
const ChildScreen = ({navigation, route}) => {
  // console.log('Route Child-Screen=============> ', route);
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="test"
        component={Chats}
        options={{title: 'Hello nesting', headerShown: false}}
      />
      <Stack.Screen
        name="testChat"
        component={ChatScreen}
        options={{title: route?.params?.name}}
      />
    </Stack.Navigator>
  );
};

export default ChildScreen;

const styles = StyleSheet.create({});
