import * as DB from '../DBService';

type NoteParams = {
  noteId?: number;
  title: string;
  description: string;
  dateTime: string;
};

export const saveNote = (data: NoteParams, callBack?: any) => {
  DB.insertData(
    [
      {
        table: 'NOTE',
        columns: 'title, description, dateTime',
        values: '?,?,?',
        params: [data.title, data.description, data.dateTime],
      },
    ],
    (res, err) => {
      callBack(res, err);
    },
  );
};

export const updateNote = (data: NoteParams, callBack?: any) => {
  DB.updateData(
    [
      {
        table: 'NOTE',
        query: 'title=?, description=?, dateTime=? WHERE noteId=?',
        values: '?,?,?,?,?,?',
        params: [data.title, data.description, data.dateTime, data.noteId],
      },
    ],
    (res, err) => {
      callBack(res, err);
    },
  );
};

export const deleteNote = (data: NoteParams, callBack?: any) => {
  DB.executeQuery(
    'DELETE FROM NOTE WHERE noteId=?',
    [data.noteId],
    (res, err) => {
      callBack(res, err);
    },
  );
};

export const getNoteById = (data: NoteParams, callBack?: any) => {
  DB.searchData(
    'SELECT * FROM NOTE WHERE noteId=?',
    [data.noteId],
    (resp, err) => {
      callBack(resp, err);
    },
  );
};

export const getAllNotes = (callBack?: any) => {
  DB.searchData('SELECT * FROM NOTE', [], (resp, err) => {
    callBack(resp, err);
  });
};
