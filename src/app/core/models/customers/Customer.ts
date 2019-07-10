import {BankAccount} from '../accounts/BankAccount';

export class Customer {
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  bankAccounts: BankAccount[];

  public constructor(init?: Partial<Customer>) {
    Object.assign(this, init);
  }
}
