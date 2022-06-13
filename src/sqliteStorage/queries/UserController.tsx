import * as DB from '../DBService';

type UserParams = {
  email: string;
  username: string;
  password: string;
};

export const saveUser = (data: UserParams, callBack?: any) => {
  DB.insertData(
    [
      {
        table: 'USER',
        columns: 'email, username, password',
        values: '?,?,?',
        params: [data.email, data.username, data.password],
      },
    ],
    (res, err) => {
      callBack(res, err);
    },
  );
};

export const getUserByUsername = (username: string, callBack?: any) => {
  DB.searchData(
    'SELECT * FROM USER WHERE username=?',
    [username],
    (resp, err) => {
      callBack(resp, err);
    },
  );
};
