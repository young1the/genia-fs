export const GET = async () => {
  try {
    const response = await fetch(
      `https://chungchun28-default-rtdb.asia-southeast1.firebasedatabase.app/api/room.json`
    );
    const rooms = await response.json();
    // console.log(rooms);
    const roomsArray = await Object.keys(rooms).map((ele) => {
      return { ...rooms[ele], ["roomId"]: ele };
    });
    return new Response(JSON.stringify([...roomsArray]), {
      status: 201,
    });
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
