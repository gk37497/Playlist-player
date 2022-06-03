import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {CText} from '../common/colored-text';
import {layout, size, text} from '../styles';
import {Lines} from '../components/lines';
import {IconButton} from '../components/icon-button';

const {width} = Dimensions.get('screen');

export const AboutScreen = () => {
  const {colors} = useTheme();

  const AboutHeader = () => (
    <View style={styles.header}>
      <CText style={[text.heading, {marginVertical: size.lg}]} secondary>
        Demo App
      </CText>
      <View style={styles.version}>
        <CText style={[text.md]} secondary>
          Version 1.0.0 [Build 13]
        </CText>
        <CText style={text.mdThin} secondary>
          2018-2022 NUM SwE
        </CText>
      </View>
    </View>
  );
  const AboutDemo = () => (
    <View style={[styles.about, {backgroundColor: colors.secondary}]}>
      <Lines color={colors.primary} />
      <View style={[styles.aboutText]}>
        <CText style={[text.md]}>
          Demo app was conceived one awfully rainy summer in the Highlands of
          Mongolia.
        </CText>
        <CText style={[text.sm, {marginTop: size.sm}]}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </CText>
      </View>
    </View>
  );

  const Projects = () => (
    <View style={styles.projects}>
      <CText style={[text.mdThin, {marginVertical: size.md}]} secondary>
        I built some apps
      </CText>
      <View style={layout.hsb}>
        <View
          style={[
            styles.other,
            {borderColor: colors.secondary, marginRight: 5},
          ]}>
          <CText style={[text.md]} secondary>
            Mevent
          </CText>
          <IconButton
            icon="chevron-forward"
            s
            color={colors.secondary}
            style={styles.btn}
          />
        </View>
        <View style={[styles.other, {borderColor: colors.secondary}]}>
          <CText style={[text.md]} secondary>
            Sonos
          </CText>
          <IconButton
            icon="chevron-forward"
            s
            color={colors.secondary}
            style={styles.btn}
          />
        </View>
      </View>
    </View>
  );

  const SocialAccounts = () => (
    <View style={styles.socialAccounts}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          styles.theme,
          {
            backgroundColor: colors.secondary,
            borderColor: colors.secondary,
            shadowColor: colors.primary,
          },
        ]}>
        <ImageBackground
          source={require('../image/festival.jpeg')}
          resizeMode="cover"
          style={styles.themeBackground}>
          <View style={[styles.filter, {backgroundColor: colors.secondary}]} />
          <View style={[styles.filter2]}>
            <View style={[styles.themeName, {backgroundColor: colors.primary}]}>
              <CText style={text.smBold} secondary>
                Follow me on instagram
              </CText>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <View style={layout.hsb}>
        <View
          style={[
            styles.other,
            {borderColor: colors.secondary, marginRight: 5},
          ]}>
          <CText style={[text.md]} secondary>
            Twitter
          </CText>
          <IconButton
            icon="chevron-forward"
            s
            color={colors.secondary}
            style={styles.btn}
          />
        </View>
        <View style={[styles.other, {borderColor: colors.secondary}]}>
          <CText style={[text.md]} secondary>
            SoundCloud
          </CText>
          <IconButton
            icon="chevron-forward"
            s
            color={colors.secondary}
            style={styles.btn}
          />
        </View>
      </View>
    </View>
  );

  const Footer = () => (
    <View style={styles.footer}>
      <IconButton color={colors.secondary} icon="logo-github" s />
      <CText style={[text.mdThin, {marginVertical: size.md}]} secondary>
        Powered by Nnnn.
      </CText>
    </View>
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={[
          styles.root,
          {backgroundColor: colors.primary},
        ]}>
        <AboutHeader />
        <View style={styles.body}>
          <AboutDemo />
          <SocialAccounts />
          <Projects />
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexGrow: 1,
    flexWrap: 'nowrap',
    paddingBottom: 200,
  },
  header: {
    ...layout.center,
  },
  body: {
    flex: 1,
    width: width - 60,
  },
  version: {
    width,
    ...layout.center,
  },
  about: {
    height: 150,
    borderRadius: 2,
    paddingVertical: size.sm,
    alignItems: 'center',
    marginTop: size.lg + 10,
    ...layout.center,
  },
  aboutText: {
    paddingHorizontal: size.md,
    marginTop: size.md,
  },
  socialAccounts: {
    marginTop: size.lg,
  },
  filter: {
    ...StyleSheet.absoluteFill,
    opacity: 0.8,
  },
  imgBack: {
    ...StyleSheet.absoluteFill,
    flex: 1,
    width: '100%',
  },
  theme: {
    ...layout.shadow,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    height: 110,
    borderRadius: 5,
    borderWidth: 3,
    ...layout.center,
    marginVertical: size.md,
  },
  themeName: {
    ...layout.hsb,
    borderRadius: 5,
    paddingVertical: size.md,
    paddingHorizontal: size.md,
    width: 'auto',
  },
  themeBackground: {
    flex: 1,
    width: '100%',
  },
  filter2: {
    ...StyleSheet.absoluteFill,
    ...layout.center,
  },
  other: {
    flex: 1,
    ...layout.hsb,
    borderWidth: 2,
    padding: size.md,
    borderRadius: 5,
  },
  projects: {
    ...layout.center,
    marginVertical: size.lg,
  },
  footer: {
    marginVertical: size.lg,
    ...layout.center,
  },
});
