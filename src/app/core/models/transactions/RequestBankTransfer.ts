export class RequestBankTransfer {
  fromAccountNumber: string;
  toAccountNumber: string;
  amount: number;

  public constructor(init?: Partial<RequestBankTransfer>) {
    Object.assign(this, init);
  }
}
