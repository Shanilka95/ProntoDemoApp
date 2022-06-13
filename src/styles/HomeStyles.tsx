import {StyleSheet} from 'react-native';
import BasicStyles, {COLORS, FONT_FAMILY} from './BasicStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND_COLOR,
  },

  modalContainer: {
    width: BasicStyles.WIDTH * 0.9,
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    padding: 20,
  },

  modalBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },

  heading: {
    fontSize: 25,
    fontFamily: FONT_FAMILY.BOLD,
    alignSelf: 'flex-start',
    color: COLORS.BLACK,
    marginHorizontal: 25,
  },

  count: {
    fontFamily: FONT_FAMILY.MEDIUM,
    color: COLORS.BLACK,
  },
  bottom: {
    backgroundColor: COLORS.WHITE,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    padding: 25,
    width: '100%',
    justifyContent: 'space-between',
  },

  username: {
    top: 5,
    alignSelf: 'flex-end',
    fontFamily: FONT_FAMILY.BOLD,
    color: COLORS.BLACK,
    fontSize: 16,
  },

  email: {
    fontFamily: FONT_FAMILY.MEDIUM,
    color: COLORS.BLACK,
    fontSize: 12,
  },

  saveBtn: {
    backgroundColor: COLORS.GREEN,
    width: BasicStyles.WIDTH * 0.375,
  },

  cancelBtn: {
    backgroundColor: COLORS.GREY,
    width: BasicStyles.WIDTH * 0.375,
  },

  userDetailContainer: {
    alignSelf: 'flex-end',
    top: 10,
    margin: 25,
  },
});

export default styles;
