import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles/components/ActionButtonStyles';

interface ActionButtonProps {
  title: string;
  onPress: () => void;
  btnStyle?: any;
  textStyle?: any;
  icon?: any;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  title,
  icon,
  onPress,
  btnStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.container, btnStyle]} onPress={onPress}>
      {icon}
      <Text style={[styles.btnText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
