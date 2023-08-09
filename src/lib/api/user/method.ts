import { User } from "@/lib/api/user/type";
import { http } from "../axios";
import * as URL from "./url"

export const findUserpassword = async (body: Pick<User, "email">) => {
    return http.post(`${URL.findUserPasswordURL}/${body.email}`);
  };