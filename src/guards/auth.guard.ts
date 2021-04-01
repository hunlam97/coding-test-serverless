import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
} from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from '../modules/users/users.service';
import { FirebaseService } from '../providers/firebase/firebase.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private firebaseService: FirebaseService,
    private usersService: UsersService,
  ) {}

  canActivate = async (context: ExecutionContext): Promise<boolean> => {
    const request = context.switchToHttp().getRequest<Request>();
    const token = request.cookies['token'];
    try {
      const { uid } = await this.firebaseService.verifyToken(token);
      const currentUser = this.usersService.getById(uid)[0];
      if (currentUser) {
        request['currentUser'] = currentUser;
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  };
}
