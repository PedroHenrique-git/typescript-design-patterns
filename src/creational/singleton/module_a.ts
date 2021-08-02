import { MyDatabaseFunction } from './db/my-database-function';

const db1 = MyDatabaseFunction;
db1.add({ name: 'Pedro', age: 10 });
db1.add({ name: 'Luiz', age: 15 });
db1.add({ name: 'Henrique', age: 60 });
db1.add({ name: 'Eduardo', age: 70 });

db1.remove(1);
db1.show();

export { MyDatabaseFunction };
