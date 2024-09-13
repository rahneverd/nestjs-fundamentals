import { ArrayNotEmpty, IsArray } from 'class-validator';

export class LoggerMiddlewareBody {
  @IsArray()
  @ArrayNotEmpty()
  body: any[];
}
