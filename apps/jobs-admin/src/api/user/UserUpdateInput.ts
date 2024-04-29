import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  assignedJobs?: JobWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  jobs?: JobWhereUniqueInput | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
