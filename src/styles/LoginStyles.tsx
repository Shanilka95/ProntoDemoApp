import {StyleSheet} from 'react-native';
import {COLORS, FONT_FAMILY} from './BasicStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND_COLOR,
  },
  title: {
    fontSize: 30,
    fontFamily: FONT_FAMILY.BOLD,
    color: COLORS.DARK_GREY,
  },
  closeIcon: {alignSelf: 'center', bottom: 30},
});

export default styles;
