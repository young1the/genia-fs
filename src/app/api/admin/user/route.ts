export const GET = async (request: any) => {
  try {
    let accessToken = request?.headers?.get("Authorization");
    if (accessToken && accessToken !== "") {
      accessToken = accessToken.split(" ")[1];
    } else throw new Error("must logged in");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TEST_URL}/api/user.json`
    );
    const reservations = await response.json();
    return new Response(
      JSON.stringify(
        Object.keys(reservations).map((ele) => {
          return { ...reservations[ele] };
        })
      ),
      {
        status: 201,
      }
    );
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

export const PUT = async (request: any) => {
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
      `${process.env.NEXT_PUBLIC_TEST_URL}/api/user/${accessToken}/nickName.json`,
      {
        method: "PUT",
        body: JSON.stringify(requestBody.nickName),
      }
    );
    await fetch(
      `${process.env.NEXT_PUBLIC_TEST_URL}/api/user/${accessToken}/empNumber.json`,
      {
        method: "PUT",
        body: JSON.stringify(requestBody.empNumber),
      }
    );
    return new Response(null, {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
