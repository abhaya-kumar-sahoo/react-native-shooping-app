import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import {Card} from '../../Components/Card';

const products = [
  {
    id: 0,
    name: 'Apple iPhone 11 Pro Max (64GB)- Midnight Green',
    img: 'https://m.media-amazon.com/images/I/611JavcU70L._AC_UY218_.jpg',
    rating: '4.5',
    ratingCount: '214',
    price: '92,900',
    actualPrice: '1,31,908',
    discount: '6% off',
    offer: 'No cost EMI ₹4,666/month. Standard EMI also available',
    specifications: [
      '6.5-inch (16.5 cm diagonal) Super Retina XDR OLED display',
      '12MP TrueDepth front camera with Portrait Mode, 4K video, and Slo-Mo',
      'Fast charge with 18W adapter included',
      'Face ID for secure authentication',
    ],
  },
  {
    id: 1,
    name: 'New Apple iPhone 12 Pro Max (256GB) - Graphite',
    img: 'https://m.media-amazon.com/images/I/71XXJC7V8tL._AC_UY218_.jpg',
    rating: '4.2',
    ratingCount: '112',
    price: '53,490',
    actualPrice: '1,34,859',
    discount: '',
    offer: 'No cost EMI ₹5,944/month. Standard EMI also available',
    specifications: [
      '6.7-inch (17 cm diagonal) Super Retina XDR display',
      'A14 Bionic chip, the fastest chip ever in a smartphone',
      '12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording',
      'Ceramic Shield, tougher than any smartphone glass',
    ],
  },
  {
    id: 2,
    name: 'Apple MacBook Pro Core i9 9th Gen - (16 GB/1 TB SSD/Mac OS Catalina/4 GB Graphics)',
    img: 'https://i.imgur.com/1ge8POI.jpg',
    rating: '4.6',
    ratingCount: '42',
    price: '2,24,900',
    actualPrice: '2,39,900',
    discount: '6% off',
    offer: 'No cost EMI ₹24,989/month. Standard EMI also available',
    specifications: [
      '16 GB/1 TB SSD/4 GB Graphics',
      'Mac OS Catalina',
      '16 inch, Silver, 2 kg',
      'IPS Retina Display ',
    ],
  },
  {
    id: 3,
    name: 'Apple iPhone 11 Pro (512GB) - Midnight Green',
    img: 'https://m.media-amazon.com/images/I/61m6DjujESL._AC_UY218_.jpg',
    rating: '4.0',
    ratingCount: '36',
    price: '1,23,542',
    actualPrice: '',
    discount: '',
    offer: 'Get Google One 3-month Free Trial on purchase of a Laptop',
    specifications: [
      '8 GB/1 TB HDD/Ryzen 5 Quad Core',
      'Windows 10 Pro',
      '14 inch, Transparent Silver',
      'Without Optical Disk Drive',
    ],
  },
];
export const Man = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        data={products}
        horizontal={false}
        key={'#'}
        keyExtractor={item => '#' + item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item}) => (
          <Card
            image={item.img}
            Name={item.name}
            Price={item.price}
            Ratting={item.rating}
            Discount={item.discount}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
