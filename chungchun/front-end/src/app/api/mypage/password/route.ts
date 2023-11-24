export const PUT = async (request: any) => {
  try {
    const requestBody = await request.json();
    let accessToken = request?.headers?.get("Authorization");
    if (accessToken && accessToken !== "") {
      accessToken = accessToken.split(" ")[1];
    } else throw new Error("must logged in");
    const serverUsers = await fetch(
      `${process.env.NEXT_PUBLIC_TEST_URL}/api/user.json`
    );
    const users = await serverUsers.json();
    const user = users[accessToken];
    // console.log(user.password, requestBody.password);
    if (user.password != requestBody.password)
      throw new Error("Password doesn't match");
    await fetch(
      `${process.env.NEXT_PUBLIC_TEST_URL}/api/user/${accessToken}/password.json`,
      {
        method: "PUT",
        body: JSON.stringify(requestBody.newPassword),
      }
    );
    return new Response(JSON.stringify(user), {
      status: 201,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        user: "",
      }),
      {
        status: 401,
      }
    );
  }
};
