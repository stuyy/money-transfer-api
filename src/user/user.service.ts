import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { getUserSelectors } from '../utils/constants';
import { hashPassword } from '../utils/helpers';
import { User } from '../utils/typeorm';
import {
  CreateUserParams,
  FindUserOptions,
  FindUserParams,
} from '../utils/types/queries';
import { UserFoundException } from './exceptions/UserFoundException';
import { IUserService } from './user';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  findUser(params: FindUserParams, options?: FindUserOptions): Promise<User> {
    const select = getUserSelectors(options?.selectPassword);
    return this.userRepository.findOne({ where: params, select });
  }

  async createUser(params: CreateUserParams) {
    const existingUser = await this.findUser({ username: params.username });
    if (existingUser) throw new UserFoundException();
    params.password = await hashPassword(params.password);
    const newUser = this.userRepository.create(params);
    return this.userRepository.save(newUser);
  }
}
