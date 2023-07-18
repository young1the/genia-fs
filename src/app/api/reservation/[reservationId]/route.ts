import { ReservationData } from "@/types/common";

const dummyData: ReservationData = {
  reservationId: "F2P8",
  roomNumber: "강의실3",
  topic: "TEST API를 만드는 주도적인 학습",
  name: "안지현",
  startDate: "2023-07-31T22:00:00",
  endDate: "2023-07-31T23:00:00",
  reservationState: 1,
};

// const mock: ReservationData = {
//   reservationId: "F2P8F1P7",
//   roomNumber: "강의실 9",
//   topic: "실무에 바로 적용하는 효율적인 업무관리 전략",
//   name: "박건예 팀장님",
//   startDate: "2023-07-19T09:00:00",
//   endDate: "2023-07-19T16:00:00",
//   reservationState: 1,
// };

export const GET = async (
  request: any,
  { params }: { params: { reservationId: string } }
) => {
  try {
    const reservationId = params.reservationId;
    const auth = await request.headers.get("Authorization");
    const token = auth?.split(" ")[1];
    if (!token) {
      return new Response(JSON.stringify({ message: "로그인을 안했네요" }), {
        status: 401,
      });
    }
    return new Response(
      JSON.stringify({
        ...dummyData,
        ["reservationId"]: reservationId,
      }),
      {
        status: 201,
      }
    );
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
