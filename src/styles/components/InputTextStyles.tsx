import {StyleSheet} from 'react-native';
import {COLORS, FONT_FAMILY} from '../BasicStyles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 15,
  },
  inputContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: COLORS.GREY,
    fontFamily: FONT_FAMILY.MEDIUM,
    alignSelf: 'flex-start',
  },
  inputTextStyle: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: COLORS.WHITE,
    color: COLORS.BLACK,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.BORDER_COLOR,
    flex: 1,
  },
});

export default styles;
