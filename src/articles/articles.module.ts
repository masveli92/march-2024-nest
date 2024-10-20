import { Module } from '@nestjs/common';

import { CommentsModule } from '../commens/comments.module';
import { UsersModule } from '../users/users.module';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';

@Module({
  imports: [CommentsModule, UsersModule],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
