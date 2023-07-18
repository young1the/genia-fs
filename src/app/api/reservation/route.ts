// <<<<<<< Updated upstream
// // import { ReservationData } from "@/types/common";
// =======
// >>>>>>> Stashed changes

// // class reservationDTO {
// //   public reservationId: string;
// //   public roomNumber: string;
// //   public topic: string;
// //   public name: string;
// //   public startDate: string;
// //   public endDate: string;
// //   public reservationState: number; // 0:예약종료 1:진행중 2:예약취소

// //   constructor(
// //     reservationId: string,
// //     roomNumber: string,
// //     topic: string,
// //     name: string,
// //     startDate: string,
// //     endDate: string,
// //     reservationState: number
// //   ) {
// //     this.reservationId = reservationId;
// //     this.roomNumber = roomNumber;
// //     this.topic = topic;
// //     this.name = name;
// //     this.startDate = startDate;
// //     this.endDate = endDate;
// //     this.reservationState = reservationState;
// //   }
// // }

// <<<<<<< Updated upstream
// // const dummyData: ReservationData = {
// //   reservationId: "F2P8",
// //   roomNumber: "강의실3",
// //   topic: "TEST API를 만드는 주도적인 학습",
// //   name: "안지현",
// //   startDate: "2023-07-18T22:00:00",
// //   endDate: "2023-07-18T23:00:00",
// //   reservationState: 1,
// // };
// =======

// >>>>>>> Stashed changes

// // const mock: ReservationData = {
// //   reservationId: "F2P8F1P7",
// //   roomNumber: "강의실 9",
// //   topic: "실무에 바로 적용하는 효율적인 업무관리 전략",
// //   name: "박건예 팀장님",
// //   startDate: "2023-07-19T09:00:00",
// //   endDate: "2023-07-19T16:00:00",
// //   reservationState: 1,
// // };
// export const POST = async (request: Request) => {
//   try {
//     const { reservationId, roomNumber, topic, name, startDate, endDate, reservationState } = await request.json();
//     const result = ReservationData.makeReservation({ reservationId, roomNumber, topic, name, startDate, endDate, reservationState});
//     // console.log(userDB.db);
//     if (result == true) {
//       return new Response(JSON.stringify({ message: "예약 성공입니다." }), {
//         status: 201,
//       });
//     }
//     return new Response(
//       JSON.stringify({ message: "이미 가입한 이메일입니다." }),
//       { status: 401 }
//     );
//   } catch (error) {
//     // console.log(error);
//     return new Response("Failed to create a new prompt", { status: 500 });
//   }
// };

export const GET = async (request: Request) => {
  try {
    const JWT = 1;
    const auth = await request.headers.get("Authorization");
    const token = auth?.split(" ")[JWT];
    if (!token) {
      return new Response(JSON.stringify({ message: "로그인을 안했네요" }), {
        status: 401,
      });
    }
    return new Response(JSON.stringify({ reservationId: "boyboy" }), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
