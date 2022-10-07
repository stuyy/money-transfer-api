import { User } from '../utils/typeorm';
import { CreateUserParams } from '../utils/types/queries';

export interface IAuthService {
  validateUser();
  registerUser(params: CreateUserParams): Promise<User>;
}
