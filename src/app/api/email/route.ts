// //let userDB : any = [];

export const POST = async (request: Request) => {
  try {
    const { email } = await request.json();
    console.log(email);
    if (email == "no@no.com")
      return new Response("전송 실패.", { status: 402 });
    return new Response("전송 완료.", { status: 201 });
  } catch (error) {
    // console.log(error);
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
