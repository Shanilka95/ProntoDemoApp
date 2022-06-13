import React from 'react';
import {KeyboardAvoidingView, Modal} from 'react-native';
import styles from '../styles/components/ModalStyles';

interface ModalProps {
  children: any;
  visible?: boolean;
  onRequestClose: any;
}

const ModalContainer: React.FC<ModalProps> = ({
  children,
  visible,
  onRequestClose,
}) => (
  <Modal
    animationType={'slide'}
    transparent
    visible={visible}
    onRequestClose={onRequestClose}>
    <KeyboardAvoidingView behavior="padding" style={styles.modalContainer}>
      {children}
    </KeyboardAvoidingView>
  </Modal>
);

export default ModalContainer;
