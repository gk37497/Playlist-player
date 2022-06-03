import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CText} from '../common/colored-text';
import {layout, size, text} from '../styles';
const {width} = Dimensions.get('screen');
export const ThemesScreen = () => {
  const {colors} = useTheme();

  const Theme = ({title, img}) => (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.theme,
        {
          backgroundColor: colors.secondary,
          borderColor: colors.primary,
          shadowColor: colors.primary,
        },
      ]}>
      <ImageBackground
        source={img}
        resizeMode="cover"
        style={styles.themeBackground}>
        <View style={[styles.filter, {backgroundColor: colors.secondary}]} />
        <View style={[styles.filter2]}>
          <View style={[styles.themeName, {backgroundColor: colors.secondary}]}>
            {/* <Icon name="checkbox" size={20} color={colors.primary} /> */}
            <CText style={text.smBold}>{title}</CText>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.root}>
        <Theme title={'PoolSuite FM'} img={require('../image/festival.jpeg')} />
        <Theme title={'Festival 2022'} img={require('../image/h.jpeg')} />
        <Theme title={'PoolSuite FM'} img={require('../image/festival.jpeg')} />
        <Theme title={'Festival 2022'} img={require('../image/h.jpeg')} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 100,
  },
  theme: {
    ...layout.shadow,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    borderWidth: StyleSheet.hairlineWidth,
    width: width - 20,
    height: 100,
    borderRadius: 3,
    ...layout.center,
    marginVertical: size.md,
  },
  themeName: {
    ...layout.hsb,
    borderRadius: size.sm,
    paddingVertical: size.sm,
    paddingHorizontal: size.md,
    width: 'auto',
  },
  themeBackground: {
    flex: 1,
    width: '100%',
  },
  filter: {
    ...StyleSheet.absoluteFill,
    opacity: 0.8,
  },
  filter2: {
    ...StyleSheet.absoluteFill,
    ...layout.center,
  },
});
