import { Job } from "../job/Job";
import { JsonValue } from "type-fest";

export type User = {
  assignedJobs?: Job | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  jobs?: Job | null;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
