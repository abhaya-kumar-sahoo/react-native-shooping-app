import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LoginTemplate} from '../../Components/LoginTemplate';

export const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const loginHandle = () => {
    alert(email);
  };
  return (
    <LoginTemplate
      emailValue={email}
      passwordValue={password}
      onChangeEmail={text => setEmail(text)}
      onChangePassword={text => setPassword(text)}
      onSubmit={loginHandle}
      RegistrationNav={() => navigation.navigate('LoginScreen')}
      submitButton="Registration"
    />
  );
};

const styles = StyleSheet.create({});
