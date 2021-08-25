import { ECommerceShoppingCart } from './shopping-cart/ecommerce-shopping-cart';
import { NewDiscount } from './shopping-cart/new-discount';

/* eslint-disable no-underscore-dangle */
const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discountStrategy = new NewDiscount();

shoppingCart.addProduct({
  name: 'Camiseta',
  price: 50,
});

shoppingCart.addProduct({
  name: 'Caneta',
  price: 50,
});

shoppingCart.addProduct({
  name: 'Caneta',
  price: 50,
});

console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
