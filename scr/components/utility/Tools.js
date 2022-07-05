import React from 'react';
import {PermissionsAndroid, ToastAndroid, Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {useDispatch} from 'react-redux';
import {FcmToken} from '../../store/action/Auth/action';
import {API_URL} from '../../constants';

export const RemotePushController = () => {
  const dispatch = useDispatch();
  PushNotification.createChannel(
    {
      channelId: 'Campaign',
      channelName: 'Campaign',
    },
    // (created) => console.log(`CreateChannel returned '${created}'`),
  );
  React.useEffect(() => {
    PushNotification.configure({
      onRegister: function (token) {
        dispatch(FcmToken(token.token));
        console.log(token.token);
      },
      onNotification: function (notification) {
        //  console.log(notification);
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }, []);
  return null;
};

export const TostMsg = ({message}) => {
  const showToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };
  if (message && API_URL == 'https://www.nearone.co.in/api/v1/seller/') {
    return showToast();
  } else {
    alert(message);
  }
  return null;
};

// export const TakePhoto = async (action, response) => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.CAMERA,
//       {
//         title: 'App Camera Permission',
//         message: 'App needs access to your camera ',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       },
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       action.type == 'capture'
//         ? ImagePicker.launchCamera(action.options, (res) => {
//             if (res.didCancel) {
//               response(null);
//             } else if (res.error) {
//               response(null);
//             } else {
//               response(res);
//             }
//           })
//         : ImagePicker.launchImageLibrary(action.options, (res) => {
//             if (res.didCancel) {
//               response(null);
//             } else if (res.error) {
//               response(null);
//             } else {
//               response(res);
//             }
//           });
//     } else {
//       throw new Error('Camera permission denied');
//     }
//   } catch (err) {
//     throw new Error(err);
//   }
// };

export const CreateFormData = (name, photo, body = {}) => {
  const data = new FormData();
  data.append(name, {
    name: photo.fileName,
    type: photo.type,
    uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  });
  Object.keys(body).forEach((key) => {
    data.append(key, body[key]);
  });
  return data;
};

export const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
