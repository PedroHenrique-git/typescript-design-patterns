/* eslint-disable max-classes-per-file */
export interface Prototype {
    clone(): Prototype;
}

export class Person implements Prototype {
  public address: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): this {
    const newObject = Object.create(this);
    return newObject;
  }

  addAddress(address: Address): void {
    this.address.push(address);
  }
}

export class Address {
  constructor(public street: string, public number: number) {}
}

const address1 = new Address('Av Brasil', 15);
const person1 = new Person('Luiz', 30);
const person2 = person1.clone();

person1.addAddress(address1);

person1.address[0].street = 'Bla Bla Bla';

console.log(person1.address);
person2.name = 'Joana';
console.log(person2.address);
