import { URL } from "@/constants/api";
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
  if (response.ok) {
    alert("성공");
  } else {
    alert("실패");
  }
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
  if (response.ok) {
    alert("성공");
  } else {
    alert("실패");
  }
};

export const register = async (userInputs: User) => {
  const response = await fetch(URL["REGISTER"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInputs),
  });
  if (response.ok) {
    alert("성공");
  } else {
    alert("실패");
  }
};
