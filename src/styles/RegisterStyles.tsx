import {StyleSheet} from 'react-native';
import {COLORS, FONT_FAMILY} from './BasicStyles';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_COLOR,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  title: {
    fontSize: 30,
    alignSelf: 'flex-start',
    fontFamily: FONT_FAMILY.BOLD,
    color: COLORS.GREEN,
  },

  btn: {
    marginTop: 30,
    alignSelf: 'flex-end',
    paddingHorizontal: 30,
  },
});

export default styles;
