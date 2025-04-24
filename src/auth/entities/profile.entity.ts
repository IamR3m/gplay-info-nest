import { ApiProperty } from '@nestjs/swagger';

export class Profile {
  @ApiProperty({ description: 'Username', nullable: false })
  username: string;

  @ApiProperty({ description: 'UserID', nullable: false })
  sub: string;
}
