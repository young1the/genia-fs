export const POST = async (
  request: any,
  { params }: { params: { reservationCode: string } }
) => {
  try {
    const reservationCode = params.reservationCode;
    const serverUsers = await fetch(
      `${process.env.NEXT_PUBLIC_TEST_URL}/api/user.json`
    );
    const users = await serverUsers.json();
    let accessToken = request?.headers?.get("Authorization") ?? "";
    if (accessToken !== "") {
      accessToken = accessToken.split(" ")[1];
    }
    const user = users[accessToken];
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TEST_URL}/api/reservation/${reservationCode}/particName.json`,
      {
        method: "POST",
        body: JSON.stringify(user.nickName),
      }
    );
    const reservationData = await response.json();
    return new Response(
      JSON.stringify({
        ...reservationData,
        ["reservationCode"]: reservationCode,
      }),
      {
        status: 201,
      }
    );
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};


export const DELETE = async (
    request: any,
    { params }: { params: { reservationCode: string } }
  ) => {
    try {
      const reservationCode = params.reservationCode;
      const serverUsers = await fetch(
        `${process.env.NEXT_PUBLIC_TEST_URL}/api/user.json`
      );
      const users = await serverUsers.json();
      let accessToken = request?.headers?.get("Authorization") ?? "";
      if (accessToken !== "") {
        accessToken = accessToken.split(" ")[1];
      }
      const user = users[accessToken];
      const particsRes = await fetch(
        `${process.env.NEXT_PUBLIC_TEST_URL}/api/reservation/${reservationCode}/particName.json`,
        {
          method: "GET"
        }
      );
      const partics = await particsRes.json();
      let partickey = ""
      for (const key of Object.keys(partics)) {
        if (user.nickName == partics[key]) {
            partickey = key;
            break ;
        }
      }
      if (partickey == "") throw new Error();
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TEST_URL}/api/reservation/${reservationCode}/particName/${partickey}.json`,
        {
          method: "DELETE",
        }
      );
      const reservationData = await response.json();
      return new Response(
        JSON.stringify({
          ...reservationData,
          ["reservationCode"]: reservationCode,
        }),
        {
          status: 201,
        }
      );
    } catch (error) {
      return new Response("Failed to create a new prompt", { status: 500 });
    }
  };
  