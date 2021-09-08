import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();
const seller1 = new Seller();
const seller2 = new Seller();

seller1.addProduct({ id: '1', name: 'Camiseta', price: 49.9 });
seller1.addProduct({ id: '2', name: 'Caneta', price: 1.99 });
seller1.addProduct({ id: '3', name: 'Calça', price: 70.00 });

seller2.addProduct({ id: '4', name: 'Arroz', price: 15.66 });
seller2.addProduct({ id: '5', name: 'feijão', price: 5.99 });
seller2.addProduct({ id: '6', name: 'macarrão', price: 7.88 });

mediator.addSeller(seller1, seller2);

// mediator.showProducts();

const buyer = new Buyer(mediator);

buyer.viewProducts();
buyer.buy('2');
buyer.buy('3');
buyer.viewProducts();
