import { ProductCustomizationDecorator } from './product/product-customize-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

const tshirt = new TShirt();
const tShirtWithStamp = new ProductStampDecorator(tshirt);
const tShirtStampFrontAndBack = new ProductStampDecorator(tShirtWithStamp);
const customizedTshirt = new ProductCustomizationDecorator(tshirt);

console.log(tshirt.getPrice(), tshirt.getName());
console.log(tShirtWithStamp.getPrice(), tShirtWithStamp.getName());
console.log(tShirtStampFrontAndBack.getPrice(), tShirtStampFrontAndBack.getName());
console.log(customizedTshirt.getPrice(), customizedTshirt.getName());
