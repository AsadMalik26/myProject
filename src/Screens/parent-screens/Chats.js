import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {theStyle} from '../../stylesheets/Stylesheet';
import ChatCard from './components/ChatCard';
import {chat} from './components/dataset';
import {createStackNavigator} from '@react-navigation/stack';
state = true;
const Stack = createStackNavigator();

import {AskAudioPermissions} from '../../utils/AudioPermissions';
AskAudioPermissions();
const Chats = ({navigation, route}) => {
  // console.log('Chats-----Navigation ===========> ', navigation);
  // console.log('Route--Child>Chats===========> ', route);
  const [chatList, setChatList] = useState(chat);
  // const [render, setRender] = useState('hello');
  useEffect(() => {
    // console.log('Render State =======> ', render);
    // setRender('world');
    // abc [erform re rendering]
  }, ['abc']);
  return (
    // <Stack.Navigator>
    <View style={[theStyle.flex]}>
      <FlatList
        data={chatList}
        renderItem={({item, index}) => (
          <ChatCard
            name={item.name}
            message={item.message}
            count={Math.floor(Math.random() * 30)}
            key={index}
            navigation={navigation}
          />
        )}
      />
    </View>
    // {/* </Stack.Navigator> */}
  );
};

export default Chats;

const styles = StyleSheet.create({});
