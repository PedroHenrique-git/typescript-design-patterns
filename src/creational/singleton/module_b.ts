import { MyDatabaseFunction } from './db/my-database-function';
import { MyDatabaseFunction as MyDatabaseClassicFromModuleA } from './module_a';

const db1 = MyDatabaseFunction;
db1.add({ name: 'Roberto', age: 10 });
db1.add({ name: 'Joana', age: 15 });
db1.add({ name: 'Luiza', age: 60 });
db1.add({ name: 'Felipe', age: 70 });

db1.remove(1);
db1.show();

console.log(MyDatabaseFunction === MyDatabaseClassicFromModuleA);
