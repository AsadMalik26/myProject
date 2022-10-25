import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function MRM() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#faedcd',
      }}>
      <View
        info="card"
        style={{width: '90%', height: '85%', backgroundColor: '#e3d5ca'}}>
        <View
          info="Header"
          style={{
            backgroundColor: '#90e0ef',
            width: '80%',
            height: 100,
            marginTop: 10,
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            borderRadius: 10,
          }}>
          <View>
            <Text>Complaint abc-123</Text>
            <Text>Customer Test User</Text>
          </View>
          <View
            style={{
              backgroundColor: '#e5989b',
              height: 50,
              paddingHorizontal: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text>City: Faislabad</Text>
          </View>
        </View>
        <View info="list" style={{flexDirection: 'row'}}>
          <TextInput
            style={{borderWidth: 1, flex: 0.7}}
            placeholder={'Select Part'}
          />
          <TextInput style={{borderWidth: 1, flex: 0.2}} placeholder={'Qty'} />
          <TouchableOpacity style={{flex: 0.2}}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
