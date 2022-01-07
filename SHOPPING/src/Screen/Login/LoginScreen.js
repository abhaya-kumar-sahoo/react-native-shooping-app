import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {LoginTemplate} from '../../Components/LoginTemplate';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const loginHandle = () => {
    navigation.navigate('BottomNavScreen')
  };
  return (
    <LoginTemplate
      emailValue={email}
      passwordValue={password}
      onChangeEmail={text => setEmail(text)}
      onChangePassword={text => setPassword(text)}
      onSubmit={loginHandle}
      LoginNav={() => navigation.navigate('RegistrationScreen')}
    />
  );
};

