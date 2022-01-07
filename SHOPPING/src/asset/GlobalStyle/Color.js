import React, {Component} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export const AppColors = {
  white: '#FFFFFF',
  yellow: '#F0E119',
  yellowDarkI: '#ffc700',
  blue: '#0000FF',
  green: '#2CC750',
  Red: '#FF0000',
  hotPink: '#E44E55',
  Black: '#000000',
  Orange: '#FFA500',
  Brown: '#A52A2A',
  Maroon: '#800000',
  Olive: '#808000',
  Magenta: '#FF00FF',
  Aquamarine: '#7FFD4',
  Lime: '#00FF00',
  Purple: '#800080',
  DarkBlue: '#00008B',
  MediumTeal: '#045F5F',
  DeepTeal: '#033E3E',
  //WHITE TRANSPARENT
  whiteop00: '#ffffff00',
  whiteop01: '#ffffff55',
  Blackop1: '#00000033',
};
export const FontSize = {
  shorter: 10,
  short: 13,
  medium: 15,
  large: 18,
  xlarge: 20,
  inputText: 22,
  xxlarge: 25,
  x3large: 30,
  x4large: 35,
  x6Large: 60,
};

export const Spacing = {
  short: 8,
  medium: 10,
  large: 16,
  xlarge: 20,
  xxlarge: 32,
  size40: 40,
};

export const {width: viewportWidth, height: viewportHeight} =
  Dimensions.get('window');

export const AppDimens = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
};
