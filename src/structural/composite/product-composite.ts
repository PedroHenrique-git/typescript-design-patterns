// Component
export abstract class ProductComponent {
    abstract getPrice (): number;

    add(product: ProductComponent): void {}

    remove(product: ProductComponent): void {}
}

// Leaf
export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

// Composite
export class ProductComposite extends ProductComponent {
    private children: ProductComponent[] = [];

    add(...product: ProductComponent[]): void {
      this.children.push(...product);
    }

    remove(product: ProductComponent): void {
      const productIndex = this.children.indexOf(product);
      if (productIndex !== -1) this.children.splice(productIndex, 1);
    }

    getPrice(): number {
      return this.children.reduce((sum, leaf) => sum += leaf.getPrice(), 0);
    }
}

// Client

const pen = new ProductLeaf('pen', 1);
const smartphone = new ProductLeaf('smartphone', 1000);
const tshirt = new ProductLeaf('tshirt', 40);
const productBox = new ProductComposite();
productBox.add(pen, smartphone, tshirt);

console.log(productBox.getPrice());

const tablet = new ProductLeaf('tablet', 2000);
const kindle = new ProductLeaf('Kindle', 300);
const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);

productBox.add(anotherProductBox);

console.log(productBox);
console.log(productBox.getPrice());
