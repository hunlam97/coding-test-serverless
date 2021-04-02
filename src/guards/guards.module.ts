import { Global, Module } from '@nestjs/common';
import { UsersModule } from '../modules/users/users.module';
import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';

@Global()
@Module({
  imports: [UsersModule],
  providers: [AuthGuard, AdminGuard],
  exports: [AuthGuard, AdminGuard],
})
export class GuardsModule {}
