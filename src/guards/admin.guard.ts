import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { PublicUserDto } from '../modules/users/dto';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor() {}
  canActivate = (context: ExecutionContext): boolean => {
    const request: Request & {
      currentUser?: PublicUserDto;
    } = context.switchToHttp().getRequest();
    return request.currentUser?.isAdmin;
  };
}
