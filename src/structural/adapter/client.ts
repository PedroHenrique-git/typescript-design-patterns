import { EmailValidatorProtocol } from './validation/email-validator-protocol';
import { EmailValidatorAdapter } from './validation/email-validator-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-function';

function validaEmail(email: string, emailValidator: EmailValidatorProtocol): void {
  if (emailValidator.isEmail(email)) {
    console.log('Válido');
  } else {
    console.log('Inválido');
  }
}

const newEmailValidator = new EmailValidatorAdapter();
validaEmail('p@email.com', newEmailValidator);
console.log(emailValidatorFnAdapter('p@email.com'));
