import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { Auth } from './security/decorators/auth.decorator';
import { Role } from './users/entities/role.enum';
import {
  ApiExcludeEndpoint,
  ApiHeader,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiExcludeEndpoint()
  @Get('/app/mqtt')
  // @Auth(Role.ADMIN)
  getHello(@Req() req: Request | any): string {
    console.log(req.user);
    return this.appService.getHello();
  }
}
