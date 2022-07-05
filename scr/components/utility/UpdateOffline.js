import * as React from 'react';
import {View, Image, Text, StyleSheet, Linking} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {useSelector} from 'react-redux';

import {COLORS, SIZES, images} from '../../constants';
import {PrimaryButton} from '../Button/Button';

export const AppUpdate = ({version, refreshing}) => {
  const actionSheetRef = React.useRef();
  const {app_url, app_version} = useSelector((state) => state.home.App_data);

  React.useEffect(() => {
    if (version < app_version) {
      actionSheetRef.current.show();
    }
  }, [version, refreshing]);

  return (
    <ActionSheet
      ref={actionSheetRef}
      statusBarTranslucent
      drawUnderStatusBar={true}
      gestureEnabled={version > app_version}
      closable={version > app_version}
      defaultOverlayOpacity={0.3}>
      <View style={styles.container}>
        <View style={{alignItems: 'center', marginVertical: 20}}>
          <Image source={images.update} style={styles.image} />
          <Text style={styles.largeText}>Please Update App</Text>
          <Text style={styles.text}>
            Your using an older version
          </Text>
        </View>
        <PrimaryButton
          title={'UPDATE NOW'}
          onPress={() => Linking.openURL(app_url)}
        />
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  netCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:COLORS.white,
  },
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 80,
    backgroundColor: COLORS.white,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    marginBottom: 15,
  },
  largeText: {
    fontSize: SIZES.body3,
    color: COLORS.text,
    fontWeight: 'bold',
  },
  text: {
    fontSize: SIZES.body4,
    color: COLORS.text,
  },
});
