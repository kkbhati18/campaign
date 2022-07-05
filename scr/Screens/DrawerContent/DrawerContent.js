import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, images} from '../../constants';
import {useDispatch, useSelector} from 'react-redux';
import {onSignOut} from '../../store/action/Auth/action';
import {TostMsg} from '../../components/utility/Tools';

const DrawerContent = ({props}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const onPress = async () => {
    try {
      await dispatch(onSignOut());
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
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
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
});
export default DrawerContent;
