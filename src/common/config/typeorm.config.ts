import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { env } from './env.config';
import { User } from 'src/modules/user/entities/user.entity';

export const typeormConfig: MysqlConnectionOptions = {
  type: 'mysql',
  host: env.DB_HOST,
  port: 3300,
  username: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  entities: [User],
  synchronize: true,
};
