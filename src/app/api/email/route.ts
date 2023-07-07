import { userDB } from "../store";

export const POST = async (request: Request) => {
  try {
    const { email } = await request.json();
    const result = userDB.emailExist({ email });
    if (result == true) {
      return new Response(
        JSON.stringify({ message: "이미 존재하는 이메일입니다. " }),
        {
          status: 401,
        }
      );
    }
    console.log(userDB);
    return new Response(
      JSON.stringify({ message: "가입 가능한 이메일입니다." }),
      {
        status: 201,
      }
    );
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
