import {Claims} from './Claims';

export class User {
  id: number;
  name: string;
  password: string;
  claims: Claims[];

  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
