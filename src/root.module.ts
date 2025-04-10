import { Module } from '@nestjs/common';
import { AppModule } from './modules/app/app.module';
import { ConfigModule } from '@nestjs/config';


// import { UsersModule } from './modules/users/users.module';
// import { TransactionModule } from './modules/transaction/transaction.module';
// import { NotificationModule } from './modules/notification/notification.module';
// import { AuthModule } from './modules/auth/auth.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env.${process.env.NODE_ENV || "dev"}`,
            isGlobal: true,
        }),
        AppModule,
        // UsersModule,
        // TransactionModule,
        // NotificationModule,
        // AuthModule,
    ],
})
export class RootModule { }