import {StyleSheet, Platform} from 'react-native';
export const primaryColor = '#FF6E4A';

export const gradientColors = ['#FC636B', '#F3B12F'];

export const text = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Zocial',
  },
  xl: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  lg: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  lgThin: {
    fontSize: 20,
  },
  md: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  mdThin: {
    fontSize: 14,
  },
  sm: {
    fontSize: 12,
  },
  smThin: {
    fontSize: 12,
    fontWeight: '200',
  },
  smBold: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  m: {
    fontSize: 10,
  },
  mBold: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  mThin: {
    fontSize: 10,
    fontWeight: '200',
  },
});

export const layout = StyleSheet.create({
  hsb: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vsb: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
});

export const size = {
  xl: Platform.isPad ? 60 : 50,
  lg: Platform.isPad ? 30 : 20,
  md: Platform.isPad ? 15 : 10,
  sm: Platform.isPad ? 10 : 5,
  iconLg: Platform.isPad ? 30 : 25,
  iconMd: Platform.isPad ? 25 : 20,
  iconSm: Platform.isPad ? 20 : 15,
  bookWidth: Platform.isPad ? 160 : 150,
  sectionHeight: Platform.isPad ? 260 : 250,
  pSize: Platform.isPad ? 80 : 70,
  pLSize: Platform.isPad ? 140 : 130,
  mpSize: Platform.isPad ? 70 : 65,
  subscriptionCard: Platform.isPad
    ? {width: 240, height: 280}
    : {width: 140, height: 180},
};
