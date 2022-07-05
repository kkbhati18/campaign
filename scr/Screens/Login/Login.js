import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchingAuth} from '../../store/action/Auth/action';
import {TostMsg} from '../../components/utility/Tools';
import LoadingDots from '../../components/Loader/LoadingDots';
import {COLORS, SIZES, images} from '../../constants';
import Form from '../../components/utility/Form';
import {PrimaryButton} from '../../components/Button/Button';

const Login = () => {
  const dispatch = useDispatch();
  const Loading = useSelector(state => state.auth.loading);
  const [UserName, setUserName] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const ref_input = React.useRef(null);

  const onPress = async () => {
    let option = {
      body: {email: UserName, password: Password},
    };
    try {
      await dispatch(fetchingAuth(option));
    } catch (error) {
      TostMsg(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageCon}>
        <Image source={images.logo} style={styles.image} />
      </View>
      <Form
        name={'Email'}
        placeholder={'Enter User Email'}
        keyboardType={'email-address'}
        value={UserName}
        onChangeText={data => {
          setUserName(data);
        }}
        onSubmitEditing={() => ref_input.current.focus()}
      />
      <Form
        name={'Password'}
        placeholder={'Enter Password'}
        value={Password}
        secureTextEntry
        ref={ref_input}
        onChangeText={data => {
          setPassword(data);
        }}
      />
      <PrimaryButton
        title={
          Loading ? (
            <LoadingDots
              dots={3}
              colors={COLORS.white}
              size={10}
              bounceHeight={5}
            />
          ) : (
            'Login'
          )
        }
        disabled={Loading}
        onPress={() => onPress()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  imageCon: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: SIZES.h3,
    color: COLORS.text,
    fontWeight: 'bold',
  },
});

export default Login;
