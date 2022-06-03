import {useTheme} from '@react-navigation/native';
import React from 'react';
import {ScrollView, View, StyleSheet, Dimensions} from 'react-native';
import {Lines} from '../components/lines';
import {ShadowBox} from '../components/shadow-box';
import {layout, size} from '../styles';

const {width, height} = Dimensions.get('screen');
export const InstagramScreen = () => {
  const {colors} = useTheme();
  return (
    <View style={styles.root}>
      <ShadowBox
        style={styles.box}
        bg={colors.secondary}
        bc={colors.primary}
        shc={colors.primary}>
        <Lines color={colors.primary} />
      </ShadowBox>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, ...layout.center},
  box: {
    width: width - 20,
    height: height - 150,
    borderWidth: StyleSheet.hairlineWidth,
    paddingTop: size.md,
  },
});
