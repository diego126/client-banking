import {User} from './User';

export class Claims {
  id: number;
  type: string;
  value: string;
  user: User;

  public constructor(init?: Partial<Claims>) {
    Object.assign(this, init);
  }
}
