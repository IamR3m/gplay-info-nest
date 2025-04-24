import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SignUpDto {
  @IsString()
  @ApiProperty({ description: 'Username'})
  readonly username: string;
  @IsString()
  @ApiProperty({ description: 'Password'})
  readonly password: string;
  @IsString()
  @ApiProperty({ description: 'Email', required: false })
  readonly email: string;
}
