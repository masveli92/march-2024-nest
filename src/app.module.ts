import { Module } from '@nestjs/common';

import { ArticlesModule } from './articles/articles.module';
import { CommentsModule } from './commens/comments.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ArticlesModule, UsersModule, CommentsModule],
})
export class AppModule {}
