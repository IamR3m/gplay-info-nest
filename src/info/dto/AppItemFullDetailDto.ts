import { ApiProperty } from '@nestjs/swagger';

class Histogram {
  @ApiProperty()
  '1': number;

  @ApiProperty()
  '2': number;

  @ApiProperty()
  '3': number;

  @ApiProperty()
  '4': number;

  @ApiProperty()
  '5': number;
}

class Category {
  @ApiProperty()
  name: string;

  @ApiProperty()
  id: string | null;
}

export class AppItemFullDetailDto {
  @ApiProperty()
  appId: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  descriptionHTML: string;

  @ApiProperty()
  summary: string;

  @ApiProperty()
  installs: string;

  @ApiProperty()
  minInstalls: number;

  @ApiProperty()
  maxInstalls: number;

  @ApiProperty()
  score: number;

  @ApiProperty()
  scoreText: string;

  @ApiProperty()
  ratings: number;

  @ApiProperty()
  reviews: number;

  @ApiProperty()
  histogram: Histogram;

  @ApiProperty()
  price: number;

  @ApiProperty({ required: false })
  originalPrice?: number;

  @ApiProperty({ required: false })
  discountEndDate?: string;

  @ApiProperty()
  free: boolean;

  @ApiProperty()
  currency: string;

  @ApiProperty()
  priceText: string;

  @ApiProperty()
  available: boolean;

  @ApiProperty()
  offersIAP: boolean;

  @ApiProperty()
  IAPRange: string;

  @ApiProperty()
  size: string;

  @ApiProperty()
  androidVersion: string;

  @ApiProperty()
  androidVersionText: string;

  @ApiProperty()
  developer: string;

  @ApiProperty()
  developerId: string;

  @ApiProperty()
  developerInternalID: string;

  @ApiProperty()
  developerEmail: string;

  @ApiProperty()
  developerWebsite: string;

  @ApiProperty()
  developerAddress: string;

  @ApiProperty()
  developerLegalName: string;

  @ApiProperty()
  developerLegalEmail: string;

  @ApiProperty()
  developerLegalAddress: string;

  @ApiProperty()
  developerLegalPhoneNumber: string;

  @ApiProperty()
  genre: string;

  @ApiProperty()
  genreId: string;

  @ApiProperty({ type: Category, isArray: true })
  categories: Array<Category>;

  @ApiProperty()
  icon: string;

  @ApiProperty()
  headerImage: string;

  @ApiProperty()
  screenshots: string[];

  @ApiProperty()
  video: string;

  @ApiProperty()
  videoImage: string;

  @ApiProperty()
  contentRating: string;

  @ApiProperty()
  contentRatingDescription: string;

  @ApiProperty()
  adSupported: boolean;

  @ApiProperty()
  released: string;

  @ApiProperty()
  updated: string;

  @ApiProperty()
  version: string;

  @ApiProperty()
  recentChanges: string;

  @ApiProperty()
  comments: string[];

  @ApiProperty()
  hasEarlyAccess: boolean;

  @ApiProperty()
  preregister: boolean;

  @ApiProperty()
  isAvailableInPlayPass: boolean;
}
