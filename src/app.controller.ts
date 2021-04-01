import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { FirebaseService } from './providers/firebase/firebase.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private firebaseService: FirebaseService,
  ) {}

  @Get('/hello')
  getHello(): string {
    return this.firebaseService.test();
  }
}
