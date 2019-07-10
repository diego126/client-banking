import {Claims} from './Claims';

export class UserAuth {
  id: number;
  name: string;
  bearerToken: string;
  isAuthenticated: boolean;
  claims: Claims[];

  public constructor(init?: Partial<UserAuth>) {
    Object.assign(this, init);
  }
}
