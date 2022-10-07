import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { Services } from '../utils/constants';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './utils/LocalStrategy';
import { SessionSerializer } from './utils/SessionSerializer';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [
    {
      provide: Services.AUTH,
      useClass: AuthService,
    },
    SessionSerializer,
    LocalStrategy,
  ],
})
export class AuthModule {}
