import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserUpdateManyWithoutJobsInput } from "./UserUpdateManyWithoutJobsInput";

export type JobUpdateInput = {
  customer?: CustomerWhereUniqueInput;
  pm?: UserWhereUniqueInput | null;
  techs?: UserUpdateManyWithoutJobsInput;
};
