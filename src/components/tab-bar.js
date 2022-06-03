/* eslint-disable react-native/no-inline-styles */
import {Animated, View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {layout, text} from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
export const MyTabBar = ({state, descriptors, navigation, position}) => {
  const {colors} = useTheme();
  const {routeNames} = state;

  const forward = () => {
    if (state.index <= routeNames.length - 1) {
      navigation.navigate(routeNames[state.index + 1]);
    }
  };
  const back = () => {
    if (state.index >= 0) {
      navigation.navigate(routeNames[state.index - 1]);
    }
  };
  return (
    <View style={[styles.root, {borderColor: colors.secondary}]}>
      <View
        style={[styles.box1, layout.hsb, {backgroundColor: colors.primary}]}>
        <View style={[styles.left, {backgroundColor: colors.primary}]}>
          <Icon
            name="soundcloud"
            size={30}
            color={colors.secondary}
            style={styles.leftItem}
          />
        </View>
        <View
          style={[
            layout.hsb,
            styles.right,
            {backgroundColor: colors.secondary},
          ]}>
          <Icon
            name="tree"
            style={styles.rightItem}
            size={25}
            color={colors.primary}
          />
          <Icon
            name="tree"
            style={styles.rightItem}
            size={25}
            color={colors.primary}
          />
          <Icon
            name="tree"
            style={styles.rightItem}
            size={25}
            color={colors.primary}
          />
        </View>
      </View>
      <View
        style={[
          styles.box2,
          {
            ...layout.hsb,
            backgroundColor: colors.card,
          },
        ]}>
        <TouchableOpacity
          onPress={back}
          disabled={state.index === 0 ? true : false}>
          <Icon
            name="long-arrow-left"
            color={state.index === 0 ? colors.primary : colors.secondary}
            size={20}
          />
        </TouchableOpacity>
        <View>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate({name: route.name, merge: false});
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            const inputRange = state.routes.map((_, i) => i);
            const opacity = position.interpolate({
              inputRange,
              outputRange: inputRange.map(i => (i === index ? 1 : 0)),
            });

            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                key={index}
                onLongPress={onLongPress}
                disabled={true}
                style={styles.tab}>
                <Animated.Text
                  style={{
                    opacity,
                    display: isFocused ? 'flex' : 'none',
                    color: colors.secondary,
                    ...text.md,
                  }}>
                  {`0${index + 1} ${label}`}
                </Animated.Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity
          onPress={forward}
          disabled={state.index === routeNames.length - 1 ? true : false}>
          <Icon
            name="long-arrow-right"
            color={
              state.index === routeNames.length - 1
                ? colors.primary
                : colors.secondary
            }
            size={20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    height: 80,
    borderBottomWidth: 1,
  },
  box1: {
    flex: 1,
  },
  box2: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 10,
  },
  tab: {
    ...layout.center,
  },
  left: {
    flex: 0.8,
    height: 40,
  },
  leftItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  right: {
    height: 40,
    flex: 1,
    borderBottomStartRadius: 50,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  rightItem: {
    marginHorizontal: 2,
  },
});
