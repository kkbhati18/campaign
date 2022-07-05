import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const Loading = () => {
  return (
    <View style={style.container}>
      <View style={style.loading}>
        <ActivityIndicator color="white" size="small" />
      </View>
    </View>
  );
};

const ListLoading = () => {
  return (
    <View style={style.listLoading}>
      <ActivityIndicator color={COLORS.primary} size="large" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width,
    height: SIZES.height,
    position: 'absolute',
    backgroundColor: '#fffffffa',
    zIndex: 1,
  },
  loading: {
    backgroundColor: COLORS.primary,
    height: 50,
    width: 50,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: (SIZES.height - 50) / 2,
    left: (SIZES.width - 50) / 2,
  },
  listLoading: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {Loading, ListLoading};
