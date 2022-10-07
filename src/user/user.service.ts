import { Injectable } from '@nestjs/common';
import { IUserService } from './user';

@Injectable()
export class UserService implements IUserService {
  createUser() {}
}
