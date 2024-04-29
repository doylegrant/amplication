import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { JobUpdateManyWithoutCustomersInput } from "./JobUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  custJobs?: JobUpdateManyWithoutCustomersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
};
