import { Mediator } from './mediator';
import { SellerProduct } from './seller-product';

export class Seller {
    private products: SellerProduct[] = [];

    private mediator?: Mediator;

    showProducts(): void {
      for (const product of this.products) {
        console.log(product.id, product.name, product.price);
      }
    }

    addProduct(...products: SellerProduct[]): void {
      this.products.push(...products);
    }

    setMediator(mediator: Mediator): void {
      this.mediator = mediator;
    }

    sell(id: string): SellerProduct | undefined {
      const productIndex = this.products.findIndex((element) => element.id === id);
      const product = this.products.splice(productIndex, 1);
      return product[0];
    }
}
