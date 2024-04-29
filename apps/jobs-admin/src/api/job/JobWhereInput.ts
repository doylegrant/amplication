import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type JobWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  pm?: UserWhereUniqueInput;
  techs?: UserListRelationFilter;
};
