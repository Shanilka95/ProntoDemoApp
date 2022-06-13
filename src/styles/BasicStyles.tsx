import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

export enum COLORS {
  BACKGROUND_COLOR = '#F3F0F9',
  BLUE = '#240470',
  LIGHT_BLUE = '#0094FF',
  BLACK = '#000000',
  WHITE = '#FFFFFF',
  IVORY = '#FFFFF0',
  RED = '#D63031',
  GREEN = '#00B894',
  ORANGE = '#FF8A35',
  BORDER_COLOR = '#E9E4F3',
  GREY = '#636363',
  DARK_GREY = '#4A4A4A',
}

export enum FONT_FAMILY {
  REGULAR = 'Poppins-Regular',
  BOLD = 'Poppins-Bold',
  MEDIUM = 'Poppins-Medium',
  EXTRA_BOLD = 'Poppins-ExtraBold',
}

export default {
  WIDTH: width,
  HEIGHT: height,

  SHADOW: {
    shadowColor: `rgba(36, 4, 112, ${Platform.OS === 'ios' ? 0.5 : 0.6})`,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.275,
    shadowRadius: 8,
  },
};
