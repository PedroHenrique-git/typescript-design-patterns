/* eslint-disable no-underscore-dangle */
import { DiscountStrategy } from './discount-strategy';
import { ECommerceProductProtocol } from './ecommerce-product-protocol';

export class ECommerceShoppingCart {
    private products: ECommerceProductProtocol[] = [];

    private _discountStrategy: DiscountStrategy = new DiscountStrategy();

    addProduct(...products: ECommerceProductProtocol[]): void {
      this.products.push(...products);
    }

    getProducts(): ECommerceProductProtocol[] {
      return this.products;
    }

    getTotal(): number {
      return this.products.reduce((ac, product) => ac + product.price, 0);
    }

    getTotalWithDiscount(): number {
      return this._discountStrategy.getDiscount(this);
    }

    set discountStrategy(discount: DiscountStrategy) {
      this._discountStrategy = discount;
    }
}
