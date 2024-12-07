// auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module'; // Import the UsersModule

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '60s' },
    }),
    UsersModule, // Add UsersModule here
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}