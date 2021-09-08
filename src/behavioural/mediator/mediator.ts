import { Seller } from './seller';
import { SellerProduct } from './seller-product';

export class Mediator {
    private sellers: Seller[] = [];

    addSeller(...sellers: Seller[]): void {
      sellers.forEach((seller) => {
        this.sellers.push(seller);
        seller.setMediator(this);
      });
    }

    buy(id: string): SellerProduct | undefined {
      for (const seller of this.sellers) {
        const product = seller.sell(id);

        if (product) {
          console.log('Aqui está o produto encontrado: ', product.id, product.name, product.price);
          return product;
        }
      }
      console.log('Produto não encontrado');
      return undefined;
    }

    showProducts(): void {
      this.sellers.forEach((seller, index) => {
        console.log(`Vendedor: ${index}`);
        console.log();
        console.log(`${seller.showProducts()}`);
        console.log();
      });
    }
}
