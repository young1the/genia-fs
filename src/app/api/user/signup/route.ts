export const POST = async (request: Request) => {
  try {
    const requestBody = await request.json();
    await fetch(`http://10.41.0.102:8080/api/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...requestBody,
        ["profileImage"]: "randomImage.com",
      }),
    });
    return new Response(JSON.stringify({ message: "성공입니다." }), {
      status: 201,
    });
  } catch (error) {
    // console.log(error.message);
    return new Response("Failed to create a new prompt", { status: 400 });
  }
};

// export const GET = async () => {
//     try {
//             return new Response(JSON.stringify({a:"get요청을하셨네요", b:"비입니다"}),{ status: 201 })
//     }  catch (error) {
//         return new Response("Failed to create a new prompt", { status: 500 });
//     }
// }
