import React from 'react';
import {View, Text, StyleSheet, Image, Modal} from 'react-native';
import {useSelector} from 'react-redux';
import {BorderedButton} from '../../components/Button/Button';
import {COLORS, SIZES} from '../../constants';

const CamButton = ({response, onPress, title, media}) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const User = useSelector((state) => state.profile.user);
  const doc = useSelector((state) => state.profile.doc_status);

  const button = (action) => {
    onPress(action), setModalVisible(false);
  };
  return (
    <View style={style.card}>
      <Text style={style.text}>{title}</Text>
      {response ? (
        <Image
          source={{uri: response.uri}}
          resizeMode={'cover'}
          style={style.image}
        />
      ) : Object.keys(media).length !== 0 ? (
        <Image
          source={{uri: media.uri}}
          resizeMode={'cover'}
          style={style.image}
        />
      ) : null}
      {User.agreement_status === 0 && (
        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 20,
          }}>
          <BorderedButton
            title={'Add Image'}
            onPress={() => setModalVisible(true)}
          />
        </View>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginTop: 22,
          }}>
          <View style={style.modalView}>
            <View style={style.modelButton}>
              <BorderedButton
                title="Take Photo"
                onPress={() =>
                  button({
                    type: 'capture',
                    options: {
                      mediaType: 'photo',
                      includeBase64: true,
                      maxWidth: 500,
                      maxHeight: 500,
                      quality: 0.5,
                    },
                  })
                }
              />
              <BorderedButton
                title="Add Image"
                onPress={() =>
                  button({
                    type: 'library',
                    options: {
                      mediaType: 'photo',
                      includeBase64: true,
                      maxWidth: 500,
                      maxHeight: 500,
                      quality: 0.5,
                    },
                  })
                }
              />
            </View>
          </View>
        </View>
      </Modal>
      <Text style={{...style.text, fontWeight: 'bold', textAlign: 'center'}}>
        {doc[media.status]}
      </Text>
      <Text style={{...style.text, marginVertical: 10, color: COLORS.pink}}>
        {media.remark}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 18,
    color: COLORS.text,
    marginHorizontal: 20,
  },
  card: {
    width: SIZES.width - 20,
    marginHorizontal: 10,
    backgroundColor: COLORS.white,
    marginVertical: 5,
    borderRadius: 10,
    paddingVertical: 10,
  },
  image: {
    height: SIZES.height / 3,
    width: SIZES.width - 70,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 15,
    marginHorizontal: 25,
    backgroundColor: COLORS.darkGray,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginHorizontal: 50,
  },
  modelButton: {
    marginHorizontal: 20,
    marginVertical: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default CamButton;
