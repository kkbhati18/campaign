import React from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const Dots = ({data}) => {
  return (
    <View style={style.container}>
      <View style={{...style.dotView,backgroundColor:data===1?COLORS.secondary:COLORS.lightGray}}/>
      <View style={{...style.dotView,backgroundColor:data===2?COLORS.secondary:COLORS.lightGray}}/>
      <View style={{...style.dotView,backgroundColor:data===3?COLORS.secondary:COLORS.lightGray}}/>
      <View style={{...style.dotView,backgroundColor:data===4?COLORS.secondary:COLORS.lightGray}}/>
      <View style={{...style.dotView,backgroundColor:data===5?COLORS.secondary:COLORS.lightGray}}/>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotView: {
    height: 10,
    width: 10,
    marginBottom: 10,
    borderRadius: 5,
    margin: 5,
  },
});

export default Dots;
