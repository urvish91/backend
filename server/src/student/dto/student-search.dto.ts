import { Exclude, Expose } from 'class-transformer';
import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

import { MaxLength, IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';

export class StudentSearchDto {

  @ApiProperty({
    type: String,
    description: 'Limit'
  })
  limit: string;

  @ApiProperty({
    type: Object,
    description: 'Filters'
  })
  @ApiPropertyOptional()
  filters: object;
  
  
  constructor(partial: Partial<StudentSearchDto>) {
    Object.assign(this, partial);
  }



}
