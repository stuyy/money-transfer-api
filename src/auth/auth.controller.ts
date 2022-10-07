import { Body, Controller, Inject, Post } from '@nestjs/common';
import { Routes, Services } from '../utils/constants';
import { IAuthService } from './auth';
import { RegisterUserDto } from './dtos/RegisterUser.dto';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(
    @Inject(Services.AUTH) private readonly authService: IAuthService,
  ) {}

  @Post('register')
  registerUser(@Body() registerUserPayload: RegisterUserDto) {
    return this.authService.registerUser(registerUserPayload);
  }
}
