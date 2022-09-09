import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, images, SIZES} from '../../constants';
import {useDispatch, useSelector} from 'react-redux';
import {onSignOut} from '../../store/action/Auth/action';
import {TostMsg} from '../../components/utility/Tools';
import {version as app_version} from '../../../package.json';

const DrawerContent = ({props}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const token = useSelector(state => state.auth.token);

  const onPress = async () => {
    let option = {token: token};
    try {
      await dispatch(onSignOut(option));
    } catch (error) {
      TostMsg(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Image
                source={images.avatar}
                style={{width: 50, height: 50, borderRadius: 25}}
              />
              <View style={{marginLeft: 15, width: SIZES.width / 2.5}}>
                <Text style={styles.title}>{user.name}</Text>
                <Text style={styles.title}>{user.email}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              marginTop: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.cap}>Total Referral</Text>
            <Text style={styles.title}> {user.total_referral}</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Text style={styles.text}>App ver({app_version})Beta</Text>
      <TouchableOpacity
        style={styles.bottomDrawerSection}
        activeOpacity={1}
        onPress={() => onPress()}>
        <View style={styles.row}>
          <Icon
            name="power"
            size={20}
            color={COLORS.white}
            style={{marginHorizontal: 10}}
          />
          <Text style={{...styles.title, color: COLORS.white}}>SingOut</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    marginVertical: 10,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cap: {
    fontSize: 16,
  },
  row: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomDrawerSection: {
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
    backgroundColor: COLORS.primary,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
  },
});
export default DrawerContent;
