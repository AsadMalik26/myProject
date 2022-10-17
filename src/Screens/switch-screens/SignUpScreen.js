import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {theStyle} from '../../stylesheets/Stylesheet';
import {HeadingSignIn} from './utils/SignInUtils';
import TheButton from '../../utils/TheButton';

const SignUpScreen = ({navigation}) => {
  return (
    <View style={[theStyle.flex, styles.body]}>
      <HeadingSignIn title={'Sign Up'} />
      <View info="text fields" style={[theStyle.center]}>
        <TextInput placeholder="First Name" style={styles.input} />
        <TextInput placeholder="Last Name" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
      </View>
      <View info="buttons">
        <TheButton title={'Submit'} />
      </View>
      <View info="links">
        <View style={styles.sign}>
          <Text>Already have account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignInScreen');
            }}>
            <Text style={styles.signup}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 70}}>
          <TheButton
            title={'Exit Screen'}
            onPress={() => {
              navigation.navigate('TabScreens');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  body: {
    // backgroundColor: '#fefae0',
    padding: 10,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    width: '70%',
    // backgroundColor: '#fefae0',
    borderRadius: 30,
    // height: '18%',
    margin: 5,
    paddingHorizontal: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  sign: {
    flexDirection: 'row',
    alignContent: 'center',
    alignSelf: 'center',
  },
  signup: {
    paddingLeft: 10,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: 'blue',
  },
});
