import {StyleSheet} from 'react-native';
import {COLORS, FONT_FAMILY} from '../BasicStyles';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    bottom: 35,
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnText: {
    fontSize: 15,
    fontFamily: FONT_FAMILY.MEDIUM,
    color: COLORS.WHITE,
  },
});

export default styles;
