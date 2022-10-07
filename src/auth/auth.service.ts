import { Inject, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { IUserService } from '../user/user';
import { Services } from '../utils/constants';
import { compareHash } from '../utils/helpers';
import { User } from '../utils/typeorm';
import {
  CreateUserParams,
  UserCredentialsParams,
} from '../utils/types/queries';
import { IAuthService } from './auth';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(Services.USERS) private readonly userService: IUserService,
  ) {}
  async validateUser(params: UserCredentialsParams) {
    const user = await this.userService.findUser(
      { username: params.username },
      { selectPassword: true },
    );
    const isPasswordValid = await compareHash(params.password, user.password);
    if (!isPasswordValid)
      throw new HttpException('Invalid Credentials', HttpStatus.FORBIDDEN);
    return user;
  }
  registerUser(params: CreateUserParams): Promise<User> {
    return this.userService.createUser(params);
  }
}
