import {Customer} from '../customers/Customer';

export class BankAccount {
  id: number;
  number: string;
  balance: number;
  isLocked: boolean;
  customer: Customer;

  public constructor(init?: Partial<BankAccount>) {
    Object.assign(this, init);
  }
}
