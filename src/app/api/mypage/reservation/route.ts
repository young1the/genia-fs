export const GET = async (request: any) => {
  try {
    let accessToken = request?.headers?.get("Authorization");
    if (accessToken && accessToken !== "") {
      accessToken = accessToken.split(" ")[1];
    } else throw new Error("must logged in");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TEST_URL}/api/reservation.json`
    )
    const reservations = await response.json();
    return new Response(
      JSON.stringify(
        Object.keys(reservations).filter((key: any) => reservations[key].accessToken == accessToken).map(ele=>{return {...reservations[ele], ["reservationCode"]:ele}})
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
