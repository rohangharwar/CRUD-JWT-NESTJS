import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs'; 

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const result =super.canActivate(context);
    if (result instanceof Observable) {
      return firstValueFrom(result.pipe(map((val) => !!val)));
    }
    return result;
  }
}