import { URL } from "./constants";
import { User } from "@/types/common";

export const sendCodeToEmail = async ({ email }: Pick<User, "email">) => {
  const response = await fetch(URL["CODE_SEND"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  });
  return response.ok;
};

export const verifyCode = async ({
  email,
  code,
}: Pick<User, "email" | "code">) => {
  const response = await fetch(URL["CODE_VERIFY"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      code,
    }),
  });
  return response.ok;
};

export const register = async (userInputs: User) => {
  const response = await fetch(URL["REGISTER"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInputs),
  });
  return response.ok;
};
