import { RowID, RowElement } from './interface';
import CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
}

const theRowID: RowID = CRUD.insertRow(row);
row.age = 23;
const updatedRow: RowElement = row;

CRUD.updateRow(theRowID, updatedRow);
CRUD.deleteRow(theRowID);i
