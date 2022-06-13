import {StyleSheet} from 'react-native';
import {COLORS, FONT_FAMILY} from '../BasicStyles';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    borderRadius: 8,
    backgroundColor: COLORS.LIGHT_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.BOLD,
    color: COLORS.WHITE,
  },
});

export default styles;
