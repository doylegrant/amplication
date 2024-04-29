import { Customer } from "../customer/Customer";
import { User } from "../user/User";

export type Job = {
  createdAt: Date;
  customer?: Customer;
  id: string;
  pm?: User | null;
  techs?: Array<User>;
  updatedAt: Date;
};
