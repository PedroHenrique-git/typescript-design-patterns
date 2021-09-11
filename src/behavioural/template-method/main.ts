import { resolve } from 'path';
import { CustomerDataParserJson } from './customer-data-parser-json';
import { CustomerDataParserTxt } from './customer-data-parser-txt';

async function run() {
  const filePathTXT = resolve(__dirname, 'files', 'customer.txt');
  const customerDataParserTxt = new CustomerDataParserTxt(filePathTXT);
  await customerDataParserTxt.fixCustomerData();
  console.log(customerDataParserTxt.customerData);

  console.log();

  const filePathJson = resolve(__dirname, 'files', 'customer.json');
  const customerDataParserJson = new CustomerDataParserJson(filePathJson);
  await customerDataParserTxt.fixCustomerData();
  console.log(customerDataParserJson.customerData);
}

run();
