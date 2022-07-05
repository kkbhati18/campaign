import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const Form = React.forwardRef((props, ref) => {
  return (
    <View style={style.textInput}>
      <Text style={style.text}>{props.name}</Text>
      <TextInput ref={ref} {...props} />
    </View>
  );
});
const style = StyleSheet.create({
  textInput: {
    backgroundColor: COLORS.white,
    fontSize: SIZES.body3,
    paddingHorizontal: 15,
    borderRadius: 7,
    borderColor: COLORS.darkGray,
    borderWidth: 1,
    marginVertical: 10,
  },
  text: {
    fontSize: SIZES.body3,
    color: COLORS.text,
    top: -13,
    backgroundColor: COLORS.white,
    position: 'absolute',
    left: 20,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
});

export default Form;
