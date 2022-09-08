import React from 'react';
import {
  View,
  Text,
  RefreshControl,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {COLORS, SIZES, images} from '../../../constants';
import {useDispatch, useSelector} from 'react-redux';
import {Home} from '../../../store/action/Home/action';
import {
  sendWhatsApp,
  TostMsg,
  wait,
  sendSms,
} from '../../../components/utility/Tools';
import Form from '../../../components/utility/Form';
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../components/Button/Button';
import {AppUpdate} from '../../../components/utility/UpdateOffline';
import {version as app_version} from '../../../../package.json';

const Content = ({navigation}) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const token = useSelector(state => state.auth.token);
  const Load = useSelector(state => state.home.loading);
  const user = useSelector(state => state.auth.user);
  const App = useSelector(state => state.home.App_ver);
  const Url = useSelector(state => state.home.App_data);
  const [refreshing, setRefreshing] = React.useState(false);
  const [mobile, setMobile] = React.useState('+91');

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  React.useEffect(() => {
    const fetching = async () => {
      let option = {token: token};
      try {
        await dispatch(Home(option));
        setRefreshing(false);
      } catch (err) {
        TostMsg(err);
      }
    };
    if (token) {
      fetching();
    }
  }, [isFocused, refreshing]);

  const onSms = async () => {
    let msg = Url;
    try {
      await sendSms(mobile, msg);
      setRefreshing(true);
      setMobile('+91');
    } catch (err) {
      TostMsg(err);
    }
  };
  const onWhatsApp = async () => {
    let msg = Url;
    try {
      await sendWhatsApp(mobile, msg);
      setRefreshing(true);
      setMobile('+91');
    } catch (err) {
      TostMsg(err);
    }
  };

  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing || Load}
            onRefresh={onRefresh}
          />
        }>
        <View style={styles.imgCon}>
          <Image source={images.avatar_5} style={styles.image} />
          <Text style={styles.headline}>Total Referral</Text>
          <Text style={styles.headline}> {user.total_referral}</Text>
        </View>
        <Form
          name={'Mobile Number'}
          placeholder={'Enter new Customer mobile num'}
          keyboardType={'phone-pad'}
          value={mobile}
          style={{fontSize: SIZES.body2, fontWeight: 'bold'}}
          maxLength={13}
          onChangeText={data => {
            setMobile(data);
          }}
        />
        <SecondaryButton
          title={'Whats App'}
          disabled={Load}
          color={COLORS.green}
          titleColor={COLORS.white}
          onPress={() => onWhatsApp()}
        />
        <View style={{marginTop: 10}}>
          <PrimaryButton
            title={' SMS'}
            disabled={Load}
            onPress={() => onSms()}
          />
        </View>
        <View style={styles.textCon}>
          <Text style={styles.headline}>Campaign Details</Text>
          <Text style={styles.Text}>This Campaign running for NEARONE APP</Text>
          <Text style={styles.Text}>
            per user Referral reward is ₹{user.referral_point}
          </Text>
        </View>
      </ScrollView>
      {Object.keys(App).length !== 0 && (
        <AppUpdate version={app_version} refreshing={refreshing} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  imgCon: {
    marginVertical: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  headline: {
    fontSize: SIZES.h3,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  largeText: {
    fontSize: SIZES.body3,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  text: {
    fontSize: SIZES.body4,
    color: COLORS.text,
  },
  textCon: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
});

export default Content;
