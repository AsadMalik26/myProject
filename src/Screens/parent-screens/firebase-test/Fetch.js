import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import {firebase} from './config';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Fetch = () => {
  const [users, setUsers] = useState([]);
  //   const todoRef = firebase.firestore().collection('todos');

  async function fetchData() {
    const todoRef = await firebase.firestore().collection('todos');
    console.log('fetching');
    await todoRef.onSnapshot(querySnapshot => {
      const usersData = [];
      querySnapshot.forEach(doc => {
        const {heading, text} = doc.data();
        usersData.push({
          id: doc.id,
          heading,
          text,
        });
      });
      setUsers(usersData);
      console.log('usersData======>', usersData);
    });
    console.log('users======> ', users);
  }

  useEffect(() => {
    fetchData();
  }, [users.length]);

  return (
    <View style={{flex: 1, marginTop: 10}}>
      <Text>Where my fetch data?</Text>
      <FlatList
        //style={{height:'50%'}}
        data={users}
        //numColumns={1}
        keyExtractor={item => item.id}
        renderItem={
          ({item}) => (
            //<View
            //style={styles.container}
            //>
            //<View style={styles.innerContainer}>
            <>
              <Text style={styles.itemHeading}> {item.heading}</Text>
              <Text style={styles.itemText}>{item.text}</Text>
            </>
            //</View>
          )

          //</View>
        }
      />
      <TouchableOpacity
        onPress={() => fetchData()}
        style={{
          marginBottom: 50,
          alignSelf: 'center',
          height: 60,
          backgroundColor: 'yellow',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Fetch Again</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Fetch;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5',
    padding: 15,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
  },
  /*innerContainer:{
        alignItems:'center',
        flexDirection:'column',
        backgroundColor:'red',
        color:'green'
    },
    itemHeading:{
        fontWeight:'bold',
        color:'black'
    },
    itemText:{
        fontWeight:'300'
    }*/
});
