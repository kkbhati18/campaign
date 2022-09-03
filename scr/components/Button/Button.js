import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {COLORS, SIZES} from '../../constants';

export const PrimaryButton = ({title, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const SecondaryButton = ({title, onPress, color, titleColor}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{...style.btnContainer, backgroundColor: color}}>
        <Text style={{...style.title, color: titleColor}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  title: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 18,
    margin: 10,
  },
  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
