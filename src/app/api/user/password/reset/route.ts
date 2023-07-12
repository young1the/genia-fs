import { userDB } from "@/app/api/store";

export const POST = async (request: Request) => {
  try {
    const { email } = await request.json();
    const result = userDB.passwordReset({ email });
    if (result != -1) {
      return new Response(
        JSON.stringify({ message: "비밀번호 초기화 성공 " + result }),
        {
          status: 201,
        }
      );
    }
    return new Response(
      JSON.stringify({ message: "이메일 존재 X " }),
      {
        status: 401,
      }
    );
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
