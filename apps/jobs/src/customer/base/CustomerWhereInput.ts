/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AddressWhereUniqueInput } from "../../address/base/AddressWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { JobListRelationFilter } from "../../job/base/JobListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class CustomerWhereInput {
  @ApiProperty({
    required: false,
    type: () => AddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AddressWhereUniqueInput)
  @IsOptional()
  @Field(() => AddressWhereUniqueInput, {
    nullable: true,
  })
  address?: AddressWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => JobListRelationFilter,
  })
  @ValidateNested()
  @Type(() => JobListRelationFilter)
  @IsOptional()
  @Field(() => JobListRelationFilter, {
    nullable: true,
  })
  custJobs?: JobListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  phone?: StringNullableFilter;
}

export { CustomerWhereInput as CustomerWhereInput };
