import { userDB } from "@/app/api/store";

export const POST = async (request: Request) => {
  try {
    const { password, newPassword } = await request.json();
    const result = userDB.passwordUpdate({ password, newPassword });
    if (result == true) {
      return new Response(JSON.stringify({ message: "변경되었습니다. " }), {
        status: 201,
      });
    }
    return new Response(JSON.stringify({ message: "입력하신 비밀번호가 틀렸습니다." }), {
      status: 401,
    });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
