import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../constants';

const CheckBox = (props) => {
  const iconName = props.isChecked ? 'radiobox-marked' : 'radiobox-blank';

  return (
    <View style={styles.container}>
      <Icon
        name={iconName}
        size={24}
        color={props.isChecked ? COLORS.green : COLORS.darkGray}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginHorizontal: 5,
  },
});
export default CheckBox;
