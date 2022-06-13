import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import IconS from 'react-native-vector-icons/SimpleLineIcons';
import ActionButton from '../components/ActionButton';
import InputText from '../components/InputText';
import ListItem from '../components/ListItem';
import ModalContainer from '../components/ModalContainer';
import {StackParams} from '../navigation/MainNavigation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {COLORS} from '../styles/BasicStyles';
import styles from '../styles/HomeStyles';
import * as NoteController from '../sqliteStorage/queries/NoteController';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [noteId, setNoteId] = React.useState(0);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [noteList, setNoteList] = React.useState([]);
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [userData, setUserData] = React.useState(Object.assign({}));

  React.useEffect(() => {
    getUserData();
    getAllNotes();
  }, []);

  const getUserData = async () => {
    try {
      const data = await AsyncStorage.getItem('USER');
      data != null ? setUserData(JSON.parse(data)) : setUserData(null);
    } catch (e) {
      console.log('error', e);
    }
  };

  const getAllNotes = () => {
    NoteController.getAllNotes((response: []) => {
      setNoteList(response);
    });
  };

  const saveNote = () => {
    let data = {
      title,
      description,
      dateTime: new Date().toISOString(),
    };
    NoteController.saveNote(data);
    getAllNotes();
    closeModal();
  };

  const onNoteSelect = (data: any) => {
    setModalVisible(true);
    setNoteId(data.noteId);
    setTitle(data.title);
    setDescription(data.description);
    setIsUpdate(true);
  };

  const updateNote = () => {
    let updatedData = {
      noteId,
      title,
      description,
      dateTime: new Date().toISOString(),
    };
    NoteController.updateNote(updatedData);
    getAllNotes();
    closeModal();
  };

  const closeModal = () => {
    setTitle('');
    setDescription('');
    setIsUpdate(false);
    setNoteId(0);
    setModalVisible(false);
  };

  const deleteNote = (item: any) => {
    Alert.alert(
      'Delete Note?',
      'Are you sure you want to delete this note?',
      [
        {text: 'Cancel'},
        {
          text: 'OK',
          onPress: () => {
            NoteController.deleteNote(item);
            getAllNotes();
          },
        },
      ],
      {cancelable: false},
    );
  };

  const logout = () => {
    AsyncStorage.removeItem('USER');
    navigation.replace('Login');
  };

  const renderNoteModal = () => {
    return (
      <ModalContainer
        visible={modalVisible}
        onRequestClose={!modalVisible}
        children={
          <View style={styles.modalContainer}>
            <InputText
              title="Note Title"
              placeholder="Enter note title"
              stateValue={title}
              setState={setTitle}
            />
            <InputText
              title="Note"
              placeholder="Enter note title"
              stateValue={description}
              multiline={true}
              inputStyle={{height: 250}}
              setState={setDescription}
            />
            <View style={styles.modalBtnContainer}>
              <ActionButton
                title={isUpdate ? 'Update' : 'Save'}
                onPress={isUpdate ? () => updateNote() : () => saveNote()}
                btnStyle={styles.saveBtn}
              />
              <ActionButton
                title="Cancel"
                onPress={() => closeModal()}
                btnStyle={styles.cancelBtn}
              />
            </View>
          </View>
        }
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userDetailContainer}>
        <Text style={styles.username}>{userData?.username}</Text>
        <Text style={styles.email}>{userData?.email}</Text>
      </View>
      <Text style={styles.heading}>Notes</Text>

      <FlatList
        data={noteList}
        renderItem={({item}) => (
          <ListItem
            data={item}
            onPress={() => onNoteSelect(item)}
            onDelete={() => deleteNote(item)}
          />
        )}
      />

      <View style={{padding: 40}} />
      {renderNoteModal()}
      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => logout()}>
          <IconS name="logout" size={25} color={COLORS.ORANGE} />
        </TouchableOpacity>
        <Text style={styles.count}>{`${noteList.length} Notes`}</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="new-message" size={25} color={COLORS.ORANGE} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
