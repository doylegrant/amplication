import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { JobListRelationFilter } from "../job/JobListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  address?: AddressWhereUniqueInput;
  custJobs?: JobListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
};
