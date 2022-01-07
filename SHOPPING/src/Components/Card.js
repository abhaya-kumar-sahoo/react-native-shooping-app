import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {AppColors, AppDimens, FontSize} from '../asset/GlobalStyle/Color';

export const Card = ({
  image = 'https://images.meesho.com/images/products/16927596/e58dc_512.jpg',
  Name = 'Stylish Retro Women Kurta',
  Price = '₹ 230',
  Discount = '%30 off',
  DeliveryType = 'Free Delivery',
  Ratting = '4.2*',
  Reviews = 6,
}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        style={styles.tinyLogo}
        resizeMode="contain"
        source={{
          uri: image,
        }}
      />
      <View style={styles.bottom}>
        <Text
          style={{
            color: AppColors.Brown,
            fontSize: FontSize.shorter,
            paddingHorizontal: 5,
          }}>
          {Name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            lineHeight: 20,
            paddingHorizontal: 5,
          }}>
          <Text style={{fontSize: 16, fontWeight: '900'}}>{Price}</Text>
          <Text style={{color: AppColors.green}}>{Discount}</Text>
        </View>
        <Text
          style={{
            fontSize: FontSize.shorter,
            lineHeight: 30,
            paddingHorizontal: 5,
          }}>
          {DeliveryType}{' '}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 5,
          }}>
          <Text
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: AppColors.green,
              color: AppColors.white,
              borderRadius: 20,
            }}>
            {Ratting}
          </Text>
          <Text>{Reviews} Reviews</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: AppDimens.width * 0.45,
    height: AppDimens.height * 0.43,
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  tinyLogo: {
    width: AppDimens.width * 0.45,
    height: AppDimens.height * 0.23,
    borderRadius: 10,
  },
  bottom: {
    width: '100%',
  },
});
