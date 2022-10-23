import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {firebase} from './config';
const todoRef = firebase.firestore().collection('todos');
const getData = async () => {
  return todoRef.onSnapshot(querySnapshot => {
    const users = [];
    querySnapshot.forEach(doc => {
      const {heading, text} = doc.data();
      users.push({
        id: doc.id,
        heading,
        text,
      });
    });
    console.log('Fetched====> ', users);
    return users;
  });
};

// method 2 - using docs
import {db} from './config';
import {collection, getDocs} from 'firebase/firestore';

const getData2 = async () => {
  const querySnapshot = await getDocs(collection(db, 'todos'));
  querySnapshot.forEach(doc => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
};

export default function FirebaseTestScreen() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getData2();
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.card}>
        <Text style={styles.heading}>Heading</Text>
        <Text style={styles.subHeading}>Sub Heading</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2e9e4',
    width: '70%',
    height: 70,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 18,
    textAlign: 'center',
  },
});
