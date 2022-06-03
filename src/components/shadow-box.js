import React from 'react';
import {View, StyleSheet} from 'react-native';
import {layout} from '../styles';

export const ShadowBox = ({bg, bc, shc, style, children}) => {
  const styles = StyleSheet.create({
    box: {
      ...layout.shadow,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: bc,
      backgroundColor: bg,
      shadowColor: shc,
      borderRadius: 2,
    },
  });
  return <View style={[styles.box, style]}>{children}</View>;
};
