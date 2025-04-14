import { IsString } from 'class-validator';

export class SignUpDto {
  @IsString()
  readonly username: string;
  @IsString()
  readonly password: string;
  @IsString()
  readonly email: string;
}
