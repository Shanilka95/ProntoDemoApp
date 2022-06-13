import React from 'react';
import {
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from '../navigation/MainNavigation';
import InputText from '../components/InputText';
import ActionButton from '../components/ActionButton';
import BackButton from '../components/BackButton';
import * as UserController from '../sqliteStorage/queries/UserController';
import styles from '../styles/RegisterStyles';

const Register = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [initialPW, setInitialPW] = React.useState('');
  const [password, setPassword] = React.useState('');
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const validateRegistration = () => {
    if (!regexEmail.test(email)) {
      Alert.alert('Please Enter a valid email address');
      return false;
    }
    if (username.length < 4) {
      Alert.alert('Username must be at least 4 characters long');
      return false;
    }
    if (initialPW.length < 4) {
      Alert.alert('Password must be at least 4 characters long');
      return false;
    }
    if (password !== initialPW) {
      Alert.alert('Passwords do not match');
      return false;
    }
    return true;
  };

  const onRegister = () => {
    if (validateRegistration()) {
      let data = {
        username,
        email,
        password,
      };
      UserController.saveUser(data);
      navigation.pop(1);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <SafeAreaView style={styles.container}>
        <BackButton onPress={() => navigation.pop()} />

        <Text style={styles.title}>Register Here</Text>

        <InputText title="Email" stateValue={email} setState={setEmail} />

        <InputText
          title="Username"
          stateValue={username}
          setState={setUsername}
        />

        <InputText
          title="Password"
          stateValue={initialPW}
          setState={setInitialPW}
          secureTextEntry
        />
        <InputText
          title="Confirm Password"
          stateValue={password}
          setState={setPassword}
          secureTextEntry
        />

        <ActionButton
          title="Submit"
          btnStyle={styles.btn}
          onPress={() => onRegister()}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Register;
