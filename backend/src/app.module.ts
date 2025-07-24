import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LandingPageController } from './controllers/landing-page.controller';
import { LandingPageService } from './services/landing-page.service';
import { LandingPage, LandingPageSchema } from './schemas/landing-page.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/landing-pages',
    ),
    MongooseModule.forFeature([
      { name: LandingPage.name, schema: LandingPageSchema },
    ]),
  ],
  controllers: [AppController, LandingPageController],
  providers: [AppService, LandingPageService],
})
export class AppModule {}
