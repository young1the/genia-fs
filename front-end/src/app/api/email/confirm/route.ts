export const POST = async (request: Request) => {
  try {
    const requestBody = await request.json();
    const result = await fetch(`http://10.41.0.102:8080/api/email/confirm`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(requestBody),
    });
    // console.log(requestBody);
    if (result.ok) return new Response(null, { status: 200 });
    else throw new Error();
  } catch (error) {
    return new Response("연결에 실패했습니다.", { status: 400 });
  }
};
