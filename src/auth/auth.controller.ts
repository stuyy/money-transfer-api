import { Body, Controller, Inject, Post } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { Routes, Services } from '../utils/constants';
import { IAuthService } from './auth';
import { RegisterUserDto } from './dtos/RegisterUser.dto';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(
    @Inject(Services.AUTH) private readonly authService: IAuthService,
  ) {}

  @Post('register')
  async registerUser(@Body() registerUserPayload: RegisterUserDto) {
    return instanceToPlain(
      await this.authService.registerUser(registerUserPayload),
    );
  }
}
