import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { LandingPageService } from '../services/landing-page.service';
import { CreateLandingPageDto } from '../dto/create-landing-page.dto';

@Controller('landing-page')
export class LandingPageController {
  constructor(private readonly landingPageService: LandingPageService) {}

  @Post()
  async create(@Body() createLandingPageDto: CreateLandingPageDto) {
    try {
      return await this.landingPageService.create(createLandingPageDto);
    } catch (error) {
      throw new HttpException(
        'Failed to create landing page',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const landingPage = await this.landingPageService.findOne(id);
      if (!landingPage) {
        throw new HttpException('Landing page not found', HttpStatus.NOT_FOUND);
      }
      return landingPage;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch landing page',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
