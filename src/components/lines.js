import React from 'react';
import {View} from 'react-native';
const line = {
  width: '100%',
  height: 1,
  marginVertical: 1,
};
export const Lines = ({color}) => (
  <>
    <View style={[line, {backgroundColor: color}]} />
    <View style={[line, {backgroundColor: color}]} />
    <View style={[line, {backgroundColor: color}]} />
    <View style={[line, {backgroundColor: color}]} />
    <View style={[line, {backgroundColor: color}]} />
  </>
);
