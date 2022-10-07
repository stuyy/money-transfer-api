import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from '../user/user';
import { Services } from '../utils/constants';
import { User } from '../utils/typeorm';
import { CreateUserParams } from '../utils/types/queries';
import { IAuthService } from './auth';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(Services.USERS) private readonly userService: IUserService,
  ) {}
  validateUser() {}
  registerUser(params: CreateUserParams): Promise<User> {
    return this.userService.createUser(params);
  }
}
