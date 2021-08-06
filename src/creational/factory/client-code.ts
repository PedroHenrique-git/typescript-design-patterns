import { CarFactory } from './factories/car-factory';
import { randomCarAlgoritm } from './main/random-vehicle';
import { randomNumbers } from './utils/random-numbers';

const carFactory = new CarFactory();
const customerNames = ['Ana', 'Joana', 'Helena', 'João'];

for (let i = 0; i < 10; i += 1) {
  const vehicle = randomCarAlgoritm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, `NOVO CARRO - ${randomNumbers(100)}`);
  newCar.stop();
  console.log('---');
}
