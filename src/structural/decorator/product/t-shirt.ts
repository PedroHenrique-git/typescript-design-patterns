import { ProductProtocol } from './product-protocol';

export class TShirt implements ProductProtocol {
    protected name: string = 'Camiseta';

    private price: number = 49.9;

    getName(): string {
      return this.name;
    }

    getPrice(): number {
      return this.price;
    }
}
