import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Chats from './parent-screens/Chats';
const Stack = createStackNavigator();
function Test({navigation}) {
  <View style={{backgroundColor: 'red', flex: 1}}>
    <Text>ChildScreen</Text>
  </View>;
}
const ChildScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="test"
        component={Chats}
        options={{title: 'Hello nesting'}}
      />
    </Stack.Navigator>
  );
};

export default ChildScreen;

const styles = StyleSheet.create({});
