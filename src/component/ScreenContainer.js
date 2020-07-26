import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppColor from '../config/Theme';

export default ScreenContainer = ({children}) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.Primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
