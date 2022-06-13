/* eslint-disable no-shadow */
import SQLite from 'react-native-sqlite-storage';
import {tableData} from './TableData';

const db = SQLite.openDatabase({
  name: 'pronto.db',
  location: 'default',
});

export const createTables = async () => {
  (await db).transaction(
    tx => {
      tableData.forEach(table => {
        const queryString = createTableMakeQueryString(table);
        tx.executeSql(
          queryString,
          [],
          (tx, response) => {
            // console.log(`create table success ${table.name}: `, response);
          },
          (tx, error) => {
            console.log(`create table error ${table.name}: `, error);
          },
        );
      });
    },
    error => {
      console.log('table create query transaction failed: ', error);
    },
    success => {
      console.log('table create query transaction:', 'success');
    },
  );
};

const createTableMakeQueryString = (tableQuery: {name: any; columns: any}) => {
  try {
    let query = `CREATE TABLE IF NOT EXISTS ${tableQuery.name} (`;
    let count = 0;
    tableQuery.columns.forEach(
      (column: {
        name: any;
        dataType: any;
        isPrimaryKey: any;
        autoIncrement: any;
        shouldNotAllowNull: any;
      }) => {
        query += `${column.name} ${column.dataType} 
      ${
        column.isPrimaryKey
          ? 'PRIMARY KEY'
          : column.autoIncrement
          ? 'AUTOINCREMENT'
          : ''
      }
      ${column.shouldNotAllowNull ? 'NOT NULL' : ''}
      ${count < tableQuery.columns.length - 1 ? ',' : ''}`;
        count++;
      },
    );
    query += '); ';
    return query;
  } catch (error) {
    console.log('query string creation failed: ', error);
  }

  return null;
};

//INSERT QUERY
export const insertData = async (
  data: any[],
  callBack: (arg0: SQLite.Transaction | null, arg1: unknown) => void,
) => {
  try {
    (await db).transaction(
      tx => {
        data.forEach(
          (table: {
            table: any;
            columns: any;
            values: any;
            params: any[] | undefined;
          }) => {
            let queryString = `INSERT INTO ${table.table} (${table.columns}) VALUES (${table.values})`;

            tx.executeSql(
              queryString,
              table.params,
              (tx, response) => {
                // console.log(`insert data success ${table.table}: `, response);
              },
              (tx, error) => {
                console.log(`insert data error ${table.table}: `, error);
              },
            );
          },
        );
      },
      error => {
        console.log('insert data query transaction failed: ', error);
        callBack(null, error); //notify caller
      },
      success => {
        // console.log('insert data query transaction success: ', success);
        callBack(success ?? 'success', null); //notify caller
      },
    );
  } catch (error) {
    console.log('insert data error: ', data);
    callBack(null, error); //notify caller
  }
};

//UPDATE QUERY
export const updateData = async (
  data: any[],
  callBack: (arg0: SQLite.Transaction | null, arg1: unknown) => void,
) => {
  try {
    (await db).transaction(
      tx => {
        data.forEach(
          (table: {
            table: any;
            query: any;
            params: any[] | undefined;
            name: any;
          }) => {
            let queryString = `UPDATE ${table.table} SET ${table.query}`;

            tx.executeSql(
              queryString,
              table.params,
              (tx, response) => {
                // console.log(`update data success ${table.name}: `, response);
              },
              (tx, error) => {
                console.log(`update data error ${table.name}: `, error);
              },
            );
          },
        );
      },
      error => {
        console.log('update data query transaction failed: ', error);
        callBack(null, error); //notify caller
      },
      success => {
        // console.log('update data query transaction success: ', success);
        callBack(success ?? 'success', null); //notify caller
      },
    );
  } catch (error) {
    console.log('update data error: ', data);
    callBack(null, error); //notify caller
  }
};

//SEARCH QUERY
export const searchData = async (
  query: string,
  params: any[] | undefined,
  callBack: (arg0: null, arg1: unknown) => void,
) => {
  try {
    (await db).executeSql(
      query,
      params,
      (tx, response) => {
        if (tx && tx.rows && tx.rows.raw()) {
          // console.log('search data : ', tx.rows.raw());
          return callBack(tx.rows.raw(), null); //notify caller
        }
      },
      (tx, error) => {
        callBack(null, error); //notify caller
        console.log('search data error : ', error);
      },
    );
  } catch (error) {
    console.log('search data error: ', error);
    callBack(null, error); //notify caller
  }
};

//ANY QUERY
export const executeQuery = async (
  query: string,
  params: any[] | undefined,
  callBack: (arg0: SQLite.Transaction | null, arg1: unknown) => void,
) => {
  try {
    (await db).executeSql(
      query,
      params,
      (tx, response) => {
        if (tx) {
          // console.log('query data : ', tx, response);
          return callBack(tx, null); //notify caller
        }
        console.log('query data error : no data');
      },
      (tx, error) => {
        callBack(null, error); //notify caller
        console.log('query data error : ', error);
      },
    );
  } catch (error) {
    console.log('query data error: ', error);
    callBack(null, error); //notify caller
  }
};
