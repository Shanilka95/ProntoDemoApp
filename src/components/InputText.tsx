import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '../styles/components/InputTextStyles';

interface InputTextProps {
  title?: string;
  editable?: boolean;
  secureTextEntry?: boolean;
  placeholder?: string;
  placeholderColor?: string;
  setState?: any;
  stateValue?: any;
  keyType?: any;
  multiline?: any;
  numberOfLines?: any;
  max?: any;
  onBlur?: any;
  inputStyle?: any;
}

const InputText: React.FC<InputTextProps> = ({
  title,
  editable,
  secureTextEntry,
  placeholder,
  placeholderColor,
  setState,
  stateValue,
  keyType,
  multiline,
  numberOfLines,
  max,
  onBlur,
  inputStyle,
}) => {
  return (
    <View style={styles.container}>
      <>
        <Text style={styles.title}>{title}</Text>
      </>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.inputTextStyle, inputStyle]}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          onChangeText={setState}
          value={stateValue}
          keyboardType={keyType}
          editable={editable}
          multiline={multiline}
          numberOfLines={numberOfLines}
          maxLength={max}
          onBlur={onBlur}></TextInput>
      </View>
    </View>
  );
};

export default InputText;
