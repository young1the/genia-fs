import { userDB } from "../../store";

export const POST = async (request: Request) => {
  try {
    const { email, code } = await request.json();
    const result = userDB.emailVerification({ email, code });
    if (result == true) {
      return new Response(JSON.stringify({ message: "인증되었습니다. " }), {
        status: 201,
      });
    }
    console.log(userDB);
    return new Response(JSON.stringify({ message: "인증 실패." }), {
      status: 401,
    });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
