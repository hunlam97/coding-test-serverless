import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { UsersService } from '../modules/users/users.service';
import { FirebaseService } from '../providers/firebase/firebase.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private firebaseService: FirebaseService,
    private usersService: UsersService,
  ) {}

  canActivate = async (context: ExecutionContext): Promise<boolean> => {
    const request = context
      .switchToHttp()
      .getRequest<Request & { cookies: Record<string, string> }>();
    const token = request.cookies['token'];
    try {
      const { uid } = await this.firebaseService.verifyToken(token);
      const currentUser = await this.usersService.getById(uid);
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
