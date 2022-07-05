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

export const SecondaryButton = ({title, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{...style.btnContainer, backgroundColor: COLORS.white}}>
        <Text style={{...style.title, color: COLORS.primary}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const BorderedButton = ({title, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View
        style={{
          ...style.btnContainer,
          backgroundColor: COLORS.white,
          borderWidth: 1,
          borderColor: COLORS.primary,
        }}>
        <Text style={{...style.title, color: COLORS.primary}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const SmallButton = ({title, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
    <View style={{...style.btnContainer, backgroundColor: COLORS.white,height:30,paddingHorizontal:10}}>
      <Text style={{...style.title, color: COLORS.primary,margin:5}}>{title}</Text>
    </View>
  </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  title: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 18,
    margin:10,
  },
  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


