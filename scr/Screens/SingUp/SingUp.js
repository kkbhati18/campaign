import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {onSingUp} from '../../store/action/Auth/action';
import {TostMsg} from '../../components/utility/Tools';
import LoadingDots from '../../components/Loader/LoadingDots';
import {COLORS} from '../../constants';
import Form from '../../components/utility/Form';
import {PrimaryButton} from '../../components/Button/Button';

const SingUp = ({navigation}) => {
  const dispatch = useDispatch();
  const Loading = useSelector(state => state.auth.loading);
  const [Name, setName] = React.useState('');
  const [Mobile, setMobile] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [ConfirmPassword, setConfirmPassword] = React.useState('');

  const ref_mobile = React.useRef(null);
  const ref_email = React.useRef(null);
  const ref_Password = React.useRef(null);
  const ref_ConfirmPassword = React.useRef(null);

  const onPress = async () => {
    let option = {
      body: {
        name: Name,
        mobile: Mobile,
        email: Email,
        password: Password,
        password_confirm: ConfirmPassword,
      },
    };
    try {
      const res = await dispatch(onSingUp(option));
      if (res.status) {
        TostMsg({message: res.message});
        navigation.goBack();
      }
    } catch (error) {
      TostMsg(error);
    }
  };

  return (
    <View style={styles.container}>
      <Form
        name={'Name'}
        placeholder={'Enter Name'}
        keyboardType={'email-address'}
        value={Name}
        onChangeText={data => {
          setName(data);
        }}
        onSubmitEditing={() => ref_mobile.current.focus()}
      />
      <Form
        name={'Mobile'}
        placeholder={'Enter Mobile Number'}
        keyboardType={'number-pad'}
        value={Mobile}
        maxLength={10}
        ref={ref_mobile}
        onChangeText={data => {
          setMobile(data);
        }}
        onSubmitEditing={() => ref_email.current.focus()}
      />
      <Form
        name={'Email'}
        placeholder={'Enter Email Address'}
        keyboardType={'email-address'}
        value={Email}
        ref={ref_email}
        onChangeText={data => {
          setEmail(data);
        }}
        onSubmitEditing={() => ref_Password.current.focus()}
      />
      <Form
        name={'Password'}
        placeholder={'Enter Password'}
        value={Password}
        ref={ref_Password}
        secureTextEntry
        onChangeText={data => {
          setPassword(data);
        }}
        onSubmitEditing={() => ref_ConfirmPassword.current.focus()}
      />
      <Form
        name={'Confirm Password'}
        placeholder={'Enter Password'}
        value={ConfirmPassword}
        ref={ref_ConfirmPassword}
        secureTextEntry
        onChangeText={data => {
          setConfirmPassword(data);
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
            'Create Account'
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
    paddingTop: 50,
  },
});

export default SingUp;
