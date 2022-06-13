export const tableData = [
  {
    name: 'NOTE',
    columns: [
      {
        name: 'noteId',
        dataType: 'INTEGER',
        isPrimaryKey: true,
        autoIncrement: true,
        shouldNotAllowNull: true,
      },
      {
        name: 'title',
        dataType: 'TEXT',
        isPrimaryKey: false,
        autoIncrement: false,
        shouldNotAllowNull: true,
      },
      {
        name: 'description',
        dataType: 'TEXT',
        isPrimaryKey: false,
        autoIncrement: false,
        shouldNotAllowNull: false,
      },
      {
        name: 'dateTime',
        dataType: 'TEXT',
        isPrimaryKey: false,
        autoIncrement: false,
        shouldNotAllowNull: false,
      },
    ],
  },
  {
    name: 'USER',
    columns: [
      {
        name: 'userId',
        dataType: 'INTEGER',
        isPrimaryKey: true,
        autoIncrement: true,
        shouldNotAllowNull: true,
      },
      {
        name: 'email',
        dataType: 'TEXT',
        isPrimaryKey: false,
        autoIncrement: false,
        shouldNotAllowNull: false,
      },
      {
        name: 'username',
        dataType: 'TEXT',
        isPrimaryKey: false,
        autoIncrement: false,
        shouldNotAllowNull: true,
      },
      {
        name: 'password',
        dataType: 'TEXT',
        isPrimaryKey: false,
        autoIncrement: false,
        shouldNotAllowNull: false,
      },
    ],
  },
];
