import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../constants';

const Header = ({navigation}) => {
  return (
    <View style={style.header}>
      <Icon
        name="menu"
        size={35}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        color={COLORS.white}
        style={{marginLeft: 10}}
      />
      <View style={{flex: 1}}>
        <Text style={style.text}>CAMPAIGN</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
    marginRight: 45,
  },
});

export default Header;
