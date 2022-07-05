import React from 'react';
import {View} from 'react-native';
import {COLORS} from '../../constants';
import {useDispatch} from 'react-redux';
import {AppVer} from '../../store/action/Home/action';
import {TostMsg} from '../../components/utility/Tools';

import Header from './Components/Header';
import Content from './Components/Content';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetching = async () => {
      try {
        await dispatch(AppVer());
      } catch (err) {
        TostMsg(err);
      }
    };
    fetching();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <Header navigation={navigation} />
      <Content navigation={navigation} />
    </View>
  );
};

export default Home;
