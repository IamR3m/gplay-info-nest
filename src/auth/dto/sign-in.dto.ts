import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SignInDto {
  @IsString()
  @ApiProperty({ description: 'Username' })
  readonly username: string;
  @IsString()
  @ApiProperty({ description: 'Password' })
  readonly password: string;
}
