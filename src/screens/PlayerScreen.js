import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {CText} from '../common/colored-text';
import {IconButton} from '../components/icon-button';
import {Lines} from '../components/lines';
import {ShadowBox} from '../components/shadow-box';
import {layout, size, text} from '../styles';

const width = Dimensions.get('screen').width;

export const PlayerScreen = () => {
  const {colors} = useTheme();
  const headStyle = {
    ...styles.fm,
    borderColor: colors.secondary,
    backgroundColor: colors.primary,
    shadowColor: colors.secondary,
  };

  const controllersStyle = {
    ...styles.controllers,
    backgroundColor: colors.secondary,
    borderColor: colors.primary,
  };

  const Control = ({icon, style}) => (
    <IconButton
      icon={icon}
      fontAwesome
      s
      color={colors.primary}
      style={style}
    />
  );

  return (
    <View style={styles.root}>
      <ShadowBox
        style={styles.player}
        bg={colors.primary}
        bc={colors.primary}
        shc={colors.primary}>
        <View style={styles.box1}>
          <IconButton icon="caret-back" s color={colors.secondary} />
          <View style={headStyle}>
            <CText secondary>Channel</CText>
            <CText secondary style={text.md}>
              Poolsuite Fm
            </CText>
          </View>
          <IconButton icon="caret-forward" s color={colors.secondary} />
        </View>
        <View style={[styles.box2, {backgroundColor: colors.secondary}]}>
          <Lines color={colors.primary} />
          <View style={styles.container1}>
            <IconButton icon="share-outline" s color={colors.primary} />
            <View style={layout.center}>
              <CText style={text.m}>0:00 / 4.53</CText>
              <CText style={[text.md, {marginVertical: size.md}]}>
                Elado - Blame
              </CText>
              <CText style={text.sm}>Gare du Nord</CText>
            </View>
            <IconButton icon="heart-outline" s color={colors.primary} />
          </View>
          <View style={controllersStyle}>
            <IconButton
              icon="fast-backward"
              fontAwesome
              s
              color={colors.primary}
              style={styles.control}
            />
            <IconButton
              icon="play"
              s
              color={colors.primary}
              style={[
                styles.control,
                styles.border,
                {borderColor: colors.primary},
              ]}
            />
            <IconButton
              icon="fast-forward"
              s
              fontAwesome
              color={colors.primary}
              style={styles.control}
            />
          </View>
          <View style={styles.footer} />
        </View>
      </ShadowBox>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {flex: 1, ...layout.center},
  player: {
    width: width - 20,
    height: width - 20,
  },
  box1: {
    flex: 1,
    paddingHorizontal: 20,
    ...layout.hsb,
  },
  box2: {
    flex: 1.8,
    paddingTop: 10,
  },
  fm: {
    ...layout.center,
    borderWidth: 1,
    width: width / 2,
    height: 60,
    borderRadius: 5,
    ...layout.shadow,
    shadowOffset: {
      width: 1.5,
      height: 1.5,
    },
  },
  container1: {
    ...layout.hsb,
    paddingHorizontal: 20,
    marginTop: 20,
    flex: 2,
  },
  controllers: {
    borderRadius: 3,
    borderWidth: 1,
    ...layout.hsb,
    marginHorizontal: 20,
    marginTop: 20,
    flex: 2,
    ...layout.shadow,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  control: {
    flex: 1,
    ...layout.center,
    height: '100%',
  },
  footer: {
    flex: 1,
  },
  border: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
});
