export const GET = async (request: Request) => {
  try {
    let accessToken = request?.headers?.get("Authorization");
    if (accessToken && accessToken !== "") {
      accessToken = accessToken.split(" ")[1];
    } else throw new Error("must logged in");
    const serverUsers = await fetch(
      `${process.env.NEXT_PUBLIC_TEST_URL}/api/user.json`
    );
    const users = await serverUsers.json();
    const user = users[accessToken];
    return new Response(JSON.stringify(user), {
      status: 201,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        user: "",
      }),
      {
        status: 201,
      }
    );
  }
};

export const PUT = async (
  request: any
) => {
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
    await fetch(
        `${process.env.NEXT_PUBLIC_TEST_URL}/api/user/${accessToken}/nickName.json`
        , {
            method: "PUT",
            body: JSON.stringify(requestBody.nickName),
        }
    );
    await fetch(
        `${process.env.NEXT_PUBLIC_TEST_URL}/api/user/${accessToken}/notificationAgreement.json`
        , {
            method: "PUT",
            body: JSON.stringify(requestBody.notificationAgreement),
        }
    );
    await fetch(
        `${process.env.NEXT_PUBLIC_TEST_URL}/api/user/${accessToken}/empNumber.json`
        , {
            method: "PUT",
            body: JSON.stringify(requestBody.empNumber),
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
        status: 201,
      }
    );
  }
};
