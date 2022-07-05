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
import {Home, CustomerData} from '../../../store/action/Home/action';
import {TostMsg, wait} from '../../../components/utility/Tools';
import Form from '../../../components/utility/Form';
import {PrimaryButton} from '../../../components/Button/Button';
import LoadingDots from '../../../components/Loader/LoadingDots';
import {AppUpdate} from '../../../components/utility/UpdateOffline';
import {version as app_version} from '../../../../package.json';

const Content = ({navigation}) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const token = useSelector(state => state.auth.token);
  const Load = useSelector(state => state.home.loading);
  const user = useSelector(state => state.auth.user);
  const App = useSelector(state => state.home.App_data);
  const [refreshing, setRefreshing] = React.useState(false);
  const [mobile, setMobile] = React.useState('');

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

  const onPress = async () => {
    let option = {token: token, body: {mobile: mobile}};
    try {
      await dispatch(CustomerData(option));
      setRefreshing(true);
      setMobile('');
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
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.imgCon}>
          <Image source={images.avatar_5} style={styles.image} />
          <Text style={styles.headline}>Total Referral</Text>
          <Text style={styles.headline}> {user.total_referral}</Text>
        </View>
        <Form
          name={'Mobile Number'}
          placeholder={'Enter new Customer mobile num'}
          keyboardType={'numeric'}
          value={mobile}
          maxLength={10}
          onChangeText={data => {
            setMobile(data);
          }}
        />
        <PrimaryButton
          title={
            Load ? (
              <LoadingDots
                dots={3}
                colors={COLORS.white}
                size={10}
                bounceHeight={5}
              />
            ) : (
              'Submit'
            )
          }
          disabled={Load}
          onPress={() => onPress()}
        />
        <View style={styles.textCon}>
          <Text style={styles.headline}>Campaign Details</Text>
          <Text style={styles.Text}>This Campaign running for NEARONE APP .per user Referral reward is ₹5 </Text>
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
