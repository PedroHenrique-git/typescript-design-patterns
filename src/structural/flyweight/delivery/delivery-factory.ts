import { DeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocationData, DeliveryLocationDictionary } from './delivery-types';

export class DeliveryFactory {
    private locations: DeliveryLocationDictionary = {}

    private createId(data: DeliveryLocationData): string {
      return Object.values(data).map((item) => item.replace(/\s+/, '').toLowerCase()).join('_');
    }

    makeLocation(intrisicState: DeliveryLocationData): DeliveryFlyweight {
      const id = this.createId(intrisicState);
    }
}
