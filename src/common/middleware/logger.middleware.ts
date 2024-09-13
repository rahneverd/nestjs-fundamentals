import { Injectable, NestMiddleware } from '@nestjs/common';
import { LoggerMiddlewareBody } from '../dto/logger-dto';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: { any; body: LoggerMiddlewareBody }, res: any, next: () => void) {
    console.log(typeof req.body);
    // if (typeof req.body['data'] != 'object') {
    //   res.send(new Error('Invalid request body'));
    // }
    next();
  }
}
