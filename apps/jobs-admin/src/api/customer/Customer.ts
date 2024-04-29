import { Address } from "../address/Address";
import { Job } from "../job/Job";

export type Customer = {
  address?: Address | null;
  createdAt: Date;
  custJobs?: Array<Job>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  updatedAt: Date;
};
