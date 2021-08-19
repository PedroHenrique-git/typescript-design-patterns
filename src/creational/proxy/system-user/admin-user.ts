import { SystemUserAddressProtocol, SystemUserProtocol } from './system-user-protocol';

export class AdminUser implements SystemUserProtocol {
  constructor(public firstName: string, public userName: string) {
    this.firstName = firstName;
    this.userName = userName;
  }

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((resolve) => setTimeout(() => resolve([
      { street: 'Av. Brasil', number: 50 },
      { street: 'Rua A', number: 30 },
    ]), 2000));
  }
}
