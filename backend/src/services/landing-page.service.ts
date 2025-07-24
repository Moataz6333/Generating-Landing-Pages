import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  LandingPage,
  LandingPageDocument,
} from '../schemas/landing-page.schema';
import { CreateLandingPageDto } from '../dto/create-landing-page.dto';

@Injectable()
export class LandingPageService {
  constructor(
    @InjectModel(LandingPage.name)
    private landingPageModel: Model<LandingPageDocument>,
  ) {}

  async create(
    createLandingPageDto: CreateLandingPageDto,
  ): Promise<LandingPage> {
    const createdLandingPage = new this.landingPageModel({
      ...createLandingPageDto,
      createdAt: new Date(),
    });
    return createdLandingPage.save();
  }

  async findOne(id: string): Promise<LandingPage | null> {
    return this.landingPageModel.findById(id).exec();
  }
}
