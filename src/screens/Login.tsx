import React from 'react';
import {Text, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from '../navigation/MainNavigation';
import {COLORS} from '../styles/BasicStyles';
import ActionButton from '../components/ActionButton';
import ModalContainer from '../components/ModalContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import QRCodeScanner from 'react-native-qrcode-scanner';
import * as DB from '../sqliteStorage/DBService';
import * as UserController from '../sqliteStorage/queries/UserController';
import styles from '../styles/LoginStyles';

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const [modalVisible, setModalVisible] = React.useState(false);

  React.useEffect(() => {
    DB.createTables();
  }, []);

  const onSuccess = (e: any) => {
    setModalVisible(false);
    UserController.getUserByUsername(e.data, async (res: any) => {
      if (res.length > 0) {
        storeUserData(res[0]);
        navigation.replace('Home');
      } else {
        Alert.alert('User Unavailable!', 'Please register first');
      }
    });
  };

  const storeUserData = async (data: any) => {
    try {
      await AsyncStorage.setItem('USER', JSON.stringify(data));
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Icon name="book-bookmark" size={150} color={COLORS.RED} />
      <Text style={styles.title}>Pronto Demo App</Text>
      <ModalContainer
        visible={modalVisible}
        onRequestClose={!modalVisible}
        children={
          <>
            <QRCodeScanner
              onRead={onSuccess}
              reactivate={true}
              showMarker={true}
            />
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <IconM
                name="close-circle"
                size={75}
                color={COLORS.RED}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
          </>
        }
      />

      <ActionButton
        title="Scan QR Code"
        onPress={() => setModalVisible(true)}
        btnStyle={{backgroundColor: COLORS.GREEN}}
      />

      <ActionButton
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </SafeAreaView>
  );
};

export default Login;
