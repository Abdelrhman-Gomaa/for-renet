import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UsersProvider } from './users.provider';

@Module({
  controllers: [
    UserController
  ],
  providers: [
    UserService,
    ...UsersProvider,
  ],
  exports: [
    UserService,
    ...UsersProvider,
  ]
})
export class UserModule { }
