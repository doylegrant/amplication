import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { JobCreateNestedManyWithoutCustomersInput } from "./JobCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: AddressWhereUniqueInput | null;
  custJobs?: JobCreateNestedManyWithoutCustomersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
};
