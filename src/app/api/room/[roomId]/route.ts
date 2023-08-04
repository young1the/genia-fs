export const GET = async (
  _: any,
  { params }: { params: { roomId: string } }
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TEST_URL}/api/room/${params.roomId}.json`
    );
    const room = await response.json();
    return new Response(
      JSON.stringify({ ...room, ["reservationCode"]: "-NbHf-IDA0mu6qZvhzIq" }),
      {
        status: 201,
      }
    );
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
