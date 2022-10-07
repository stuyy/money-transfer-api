import { User } from '../utils/typeorm';
import {
  CreateUserParams,
  UserCredentialsParams,
} from '../utils/types/queries';

export interface IAuthService {
  validateUser(params: UserCredentialsParams): Promise<User>;
  registerUser(params: CreateUserParams): Promise<User>;
}
