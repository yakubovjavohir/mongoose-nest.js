import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

class YouAreNotAcc extends HttpException {
  constructor() {
    super('sizga ruxsat yoq!', HttpStatus.FORBIDDEN);
  }
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRole = this.reflector.getAllAndOverride<string>('role', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRole) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    console.log('User from request:', user);
    console.log('Required Role:', requiredRole);

    if (!user || !user.role || user.role !== requiredRole) {
      throw new YouAreNotAcc();
    }

    return true;
  }
}
