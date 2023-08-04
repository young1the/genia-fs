export const GET = async (
  request: any,
  { params }: { params: { reservationCode: string } }
) => {
  try {
    const reservationCode = params.reservationCode;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TEST_URL}/api/reservation/${reservationCode}.json`
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

export const PUT = async (
  request: any,
  { params }: { params: { reservationCode: string } }
) => {
  try {
    const reservationCode = params.reservationCode;
    const requestBody = await request.json();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TEST_URL}/api/reservation/${reservationCode}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(requestBody.topic),
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
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TEST_URL}/api/reservation/${reservationCode}/reservationState.json`,
      {
        method: "PUT",
        body: JSON.stringify(2),
      }
    );
    return response;
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
