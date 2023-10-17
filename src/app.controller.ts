import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  post(): string {
    return this.appService.getHello();
  }

  @Get()
  get(): string {
    return this.appService.getHello();
  }

  @Get(':id')
  getById(): string {
    return this.appService.getById();
  }

  @Patch()
  update(): string {
    return this.appService.getHello();
  }

  @Delete(':id')
  delete(): string {
    return this.appService.getHello();
  }
}
