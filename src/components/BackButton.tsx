import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../styles/BasicStyles';
import styles from '../styles/components/BackButtonStyles';

interface ButtonProps {
  onPress: () => void;
}

const BackButton: React.FC<ButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="ios-arrow-back-outline" size={25} color={COLORS.LIGHT_BLUE} />
    </TouchableOpacity>
  );
};

export default BackButton;
