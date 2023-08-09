import { User } from "../user/type";

export interface PutUser
  extends Pick<User, "email" | "nickName" | "empNumber"> {}
export interface PermissionUser extends Pick<User, "email" | "role"> {}
