import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppColors, AppDimens, FontSize} from '../../asset/GlobalStyle/Color';
import LinearGradient from 'react-native-linear-gradient';
import {Man} from './Man';
import {Child} from './Child';
import {Women} from './Women';
export const HomeScreen = () => {
  const [state, setState] = React.useState(0);

  return (
    <View style={styles.home}>
      <LinearGradient
        colors={['#DE6262', '#FFB88C']}
        style={styles.linearGradient}>
        <TouchableOpacity
          style={[
            styles.buttonTop,
            {backgroundColor: state === 0 ? 'green' : 'white'},
          ]}
          onPress={() => setState(0)}>
          <Text
            style={[
              styles.text,
              {color: state === 0 ? 'white' : AppColors.hotPink},
            ]}>
            Man
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonTop,
            {backgroundColor: state === 1 ? 'green' : 'white'},
          ]}
          onPress={() => {
            setState(null), setState(1);
          }}>
          <Text
            style={[
              styles.text,
              {color: state === 1 ? 'white' : AppColors.hotPink},
            ]}>
            Child
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonTop,
            {backgroundColor: state === 2 ? 'green' : 'white'},
          ]}
          onPress={() => setState(2)}>
          <Text
            style={[
              styles.text,
              {color: state === 2 ? 'white' : AppColors.hotPink},
            ]}>
            Women
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      <View style={{flex: 1}}>
        {state === 0 ? (
          <Man />
        ) : state === 2 ? (
          <Women />
        ) : state === 1 ? (
          <Child />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  linearGradient: {
    width: AppDimens.width,
    height: AppDimens.height * 0.1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonTop: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width:95,
  },
  text: {
    fontSize: FontSize.large,
    fontWeight: '900',
    color: AppColors.hotPink,
  },
});
