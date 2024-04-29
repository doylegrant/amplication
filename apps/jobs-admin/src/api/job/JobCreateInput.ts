import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserCreateNestedManyWithoutJobsInput } from "./UserCreateNestedManyWithoutJobsInput";

export type JobCreateInput = {
  customer: CustomerWhereUniqueInput;
  pm?: UserWhereUniqueInput | null;
  techs?: UserCreateNestedManyWithoutJobsInput;
};
