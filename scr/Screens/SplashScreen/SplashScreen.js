import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getToken, getUser} from '../../store/action/Auth/action';
import {images, COLORS, SIZES} from '../../constants';

const SplashScreen = () => {
  const dispatch = useDispatch();

  async function onToken() {
    var token = await AsyncStorage.getItem('token');
    dispatch(getToken(token));
  }

  async function onUser() {
    var user = await AsyncStorage.getItem('user');
    dispatch(getUser(user));
  }

  React.useEffect(() => {
    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
    onToken();
    onUser();
  }, []);

  return (
    <View style={styles.Container}>
      <Image style={styles.Image} source={images.logo} />
      <Text style={styles.logoText}>Campaign</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  logoText: {
    fontSize: SIZES.largeTitle,
  },
  Image: {
    width: 250,
    height: 250,
  },
});

export default SplashScreen;
