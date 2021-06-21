import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Theme from './constants';
import { normalize } from './responsive';

export default StyleSheet.create({
  TitleLight1: {
    fontFamily: Theme.FONT_LIGHT,
    fontSize: normalize(25),
    letterSpacing: -0.3
  },
  TitleBold1: {
    fontFamily: Theme.FONT_BOLD,
    fontSize: normalize(25),
    letterSpacing: -0.3
  },
  TitleLight2: {
    fontFamily: Theme.FONT_LIGHT,
    fontSize: normalize(20),
    letterSpacing: -0.3
  },
  TitleBold2: {
    fontFamily: Theme.FONT_BOLD,
    fontSize: normalize(20),
    letterSpacing: -0.3
  },
  TitlePre: {
    fontFamily: Theme.FONT_BOLD,
    fontSize: normalize(10),
    letterSpacing: 1
  },
  TextButtonDefault: {
    fontFamily: Theme.FONT_LIGHT,
    fontSize: normalize(15),
    letterSpacing: -0.3
  },
  TextButtonSelected: {
    fontFamily: Theme.FONT_BOLD,
    fontSize: normalize(15),
    letterSpacing: -0.3
  },
  TextBody: {
    fontFamily: Theme.FONT_REGULAR,
    fontSize: normalize(14),
    letterSpacing: 0,
    lineHeight: 20
  },
});

const Container = styled.SafeAreaView({
  flex: 1
})

export { Container };