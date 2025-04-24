import { ApiProperty } from '@nestjs/swagger';

export class Token {
  @ApiProperty({ description: 'Access token', nullable: false })
  access_token: string;
}
