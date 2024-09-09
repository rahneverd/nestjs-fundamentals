import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOneById() {
    return 'find one by id';
  }

  @Post()
  create() {
    return this.songsService.create('new song');
  }

  @Put(':id')
  updateOneById() {
    return 'update one by id';
  }

  @Delete(':id')
  deleteOneById() {
    return 'delete one by id';
  }
}
