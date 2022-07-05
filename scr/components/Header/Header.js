import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({navigation, name, bgColour, fontColour}) => {
  return (
    <View style={{...style.header, backgroundColor: bgColour}}>
      <Icon
        name="chevron-left"
        size={30}
        onPress={navigation.goBack}
        color={fontColour}
        style={{marginLeft: 10}}
      />
      <View style={{margin: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: fontColour}}>
          {name}
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;
