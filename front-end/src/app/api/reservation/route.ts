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
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TEST_URL}/api/reservation.json`
    );
    const reservations = await response.json();
    let findID = "";
    if (reservations) {
      for (const key of Object.keys(reservations)) {
        const reservation = reservations[key];
        if (reservation.accessToken == accessToken && reservation.reservationState == 1) {
          findID = key;
          break;
        }
        if (reservation.particName) {
          for (const pkey of Object.keys(reservation.particName)) {
            if (user.nickName == reservation.particName[pkey]) {
              findID = key;
              break;
            }
          }
        }
      }
      return new Response(
        JSON.stringify({
          reservationCode: findID,
        }),
        {
          status: 201,
        }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({
        reservationCode: "",
      }),
      {
        status: 201,
      }
    );
  }
};

export const POST = async (request: Request) => {
  try {
    const requestBody = await request.json();
    const serverUsers = await fetch(
      `${process.env.NEXT_PUBLIC_TEST_URL}/api/user.json`
    );
    const users = await serverUsers.json();
    let accessToken = request?.headers?.get("Authorization") ?? "";
    if (accessToken !== "") {
      accessToken = accessToken.split(" ")[1];
    }
    const user = users[accessToken];
    const reservationState =
      +new Date(requestBody.startDate) - +new Date() > 0 ? 1 : 0;
    await fetch(`${process.env.NEXT_PUBLIC_TEST_URL}/api/reservation.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...requestBody,
        ["nickName"]: user.nickName,
        ["accessToken"]: accessToken,
        ["particName"]: "",
        reservationState,
      }),
    });
    return new Response(JSON.stringify({ message: "성공입니다." }), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 400 });
  }
};
