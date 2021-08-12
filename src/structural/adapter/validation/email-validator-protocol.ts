export interface EmailValidatorFnProtocol {
    (value: string): boolean
}

export interface EmailValidatorProtocol {
    isEmail: EmailValidatorFnProtocol;
}
