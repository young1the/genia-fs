import { userDB } from "../../store";

export const POST = async (request: Request) => {
  try {
    const { email, username, password, empNumber } = await request.json();
    const result = userDB.addUser({ email, username, password, empNumber });
    if (result == true) {
      return new Response(JSON.stringify({ message: "성공입니다." }), {
        status: 201,
      });
    }
    return new Response(
      JSON.stringify({ message: "이미 가입한 이메일입니다." }),
      { status: 401 }
    );
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};

// export const GET = async () => {
//     try {
//             return new Response(JSON.stringify({a:"get요청을하셨네요", b:"비입니다"}),{ status: 201 })
//     }  catch (error) {
//         return new Response("Failed to create a new prompt", { status: 500 });
//     }
// }
