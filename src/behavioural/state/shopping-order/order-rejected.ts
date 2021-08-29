import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderRejected implements ShoppingOrderState {
    private name: string = 'OrderRejected';

    constructor(private order: ShoppingOrder) {}

    getName(): string {
      return this.name;
    }

    approvePayment(): void {
      console.log('não posso aprovar o pagamento, porque o pagamento foi recusado');
    }

    rejectPayment(): void {
      console.log('não posso recusar o pagamento, porque o pagamento já foi recusado.');
    }

    waitPayment(): void {
      console.log('não posso esperar o pagamento, porque o pagamento foi recusado');
    }

    shipOrder(): void {
      console.log('não posso enviar um pedido com pagamento recusado.');
    }
}
