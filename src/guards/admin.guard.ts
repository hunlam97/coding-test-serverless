import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Request,
} from '@nestjs/common';
import { PublicUserDto } from '../modules/users/dto';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor() {}
  canActivate = (context: ExecutionContext): boolean => {
    const request: Request & {
      currentUser?: PublicUserDto;
    } = context.switchToHttp().getRequest();
    console.log('what');
    return request.currentUser?.isAdmin;
  };
}
