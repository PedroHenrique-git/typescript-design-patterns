import validator from 'validator';
import { EmailValidatorFnProtocol } from './email-validator-protocol';

// eslint-disable-next-line max-len
export const emailValidatorFnAdapter: EmailValidatorFnProtocol = (value: string): boolean => validator.isEmail(value);
