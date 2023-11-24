export const POST = async (request: Request) => {
  try {
    const requestBody = await request.json();
    await fetch(process.env.NEXT_PUBLIC_TEST_URL as string, {
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
    return new Response("Failed to create a new prompt", { status: 400 });
  }
};