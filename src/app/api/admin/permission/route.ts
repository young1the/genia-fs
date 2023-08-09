export const POST = async (request: any) => {
  try {
    const requestBody = await request.json();
    const serverUsers = await fetch(
      `${process.env.NEXT_PUBLIC_TEST_URL}/api/user.json`
    );
    const users = await serverUsers.json();
    let accessToken = "";
    for (const key of Object.keys(users)) {
      const user = users[key];
      if (requestBody.email == user.email) {
        accessToken = key;
      }
    }
    if (accessToken == "") throw new Error();
    await fetch(
      `${process.env.NEXT_PUBLIC_TEST_URL}/api/user/${accessToken}/role.json`,
      {
        method: "PUT",
        body: JSON.stringify(requestBody.role),
      }
    );
    return new Response(null, {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
