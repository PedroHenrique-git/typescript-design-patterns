import { EnterpriseCreateVehicleCustomerFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCreateVehicleCustomerFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const customer = enterpriseFactory.createCustomer('Pedro');
const car1 = enterpriseFactory.createVehicle('Fusca', customer.name);
car1.pickUp();
console.log(customer, car1);

const customer2 = individualFactory.createCustomer('Pedro');
const car2 = individualFactory.createVehicle('Fusca', customer.name);
car2.pickUp();
console.log(customer2, car2);
