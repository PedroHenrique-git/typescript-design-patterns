import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder();
order.approvePayment();
order.waitPayment();
order.shipOrder();
order.rejectPayment();
order.approvePayment();
order.waitPayment();
