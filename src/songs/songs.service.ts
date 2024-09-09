import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songsArray: any[] = [];

  create(song) {
    this.songsArray.push(song);
    return this.songsArray;
  }

  findAll() {
    return this.songsArray;
  }
}
