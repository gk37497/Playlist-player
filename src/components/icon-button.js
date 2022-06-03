import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';

export const IconButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      {props.fontAwesome ? (
        <FontAwesome
          name={props.icon}
          size={props.s ? 15 : 20}
          color={props.color}
        />
      ) : (
        <Icon name={props.icon} size={props.s ? 20 : 25} color={props.color} />
      )}
    </TouchableOpacity>
  );
};
