import React from 'react';
import {Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

export const CText = props => {
  const {colors} = useTheme();
  return (
    <Text
      {...props}
      style={[
        {color: props.secondary ? colors.secondary : colors.text},
        props.style,
      ]}
    />
  );
};
