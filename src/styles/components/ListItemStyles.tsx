import {StyleSheet} from 'react-native';
import BasicStyles, {COLORS, FONT_FAMILY} from '../BasicStyles';

const styles = StyleSheet.create({
  container: {
    width: BasicStyles.WIDTH / 1.125,
    borderRadius: 8,
    marginVertical: 5,
    marginHorizontal: 15,
    elevation: 6,
    padding: 15,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  title: {
    flex: 1,
    fontSize: 16,
    fontFamily: FONT_FAMILY.MEDIUM,
    color: COLORS.BLACK,
  },

  description: {
    flex: 1,
    fontSize: 15,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.GREY,
  },

  dateTimeContainer: {
    marginTop: 5,
    flexDirection: 'row',
  },

  dateTimeTxt: {
    fontSize: 13,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLORS.GREY,
    paddingLeft: 5,
  },
});

export default styles;
