import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLORS, SIZES, images} from '../../constants';

const EmptyList = (props) => {
  return (
    <View style={style.container}>
      <Image source={images.no_record} style={style.image} />
      <Text style={style.largeText}>{props.text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 150,
  },
  largeText: {
    fontSize: SIZES.body3,
    color: COLORS.primary,
  },
});

export default EmptyList;
