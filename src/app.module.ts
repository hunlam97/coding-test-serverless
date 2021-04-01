import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuardsModule } from './guards/guards.module';
import { UsersModule } from './modules/users/users.module';
import { FirebaseModule } from './providers/firebase/firebase.module';
import { DatabaseProvider } from './providers/typeorm.provider';

@Module({
  imports: [DatabaseProvider, GuardsModule, FirebaseModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
