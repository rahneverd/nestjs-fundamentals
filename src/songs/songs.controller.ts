import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Get()
  findAll() {
    return 'fetch all songs';
  }

  @Get(':id')
  findOneById() {
    return 'find one by id';
  }

  @Post()
  create() {
    return 'create a song';
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
