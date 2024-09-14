import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(typeof req.body);
    // if (typeof req.body['data'] != 'object') {
    //   res.send(new Error('Invalid request body'));
    // }
    next();
  }
}
