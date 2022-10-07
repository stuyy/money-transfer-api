import { User } from '../utils/typeorm';
import { CreateUserParams, FindUserParams } from '../utils/types/queries';

export interface IUserService {
  findUser(params: FindUserParams): Promise<User | undefined>;
  createUser(params: CreateUserParams): Promise<User>;
}
