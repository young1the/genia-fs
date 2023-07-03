// //let userDB : any = [];

// export const POST = async (request: Request) => {
//     try {
//         const {email} = await request.json();
//         // EmailService.sendEmail(email, randomNumber);
//         // email인증센터 = [...,{email, rand}];
//         for (const user of userDB) {
//             if (user.email == email) {
//                 return new Response("이미 가입한 회원입니다..", {status:401});
//             }
//         }
//         const randomNumber = Math.floor(Math.random() * 10000 % 1000);
//         emailVerification = [...emailVerification, {email, code:randomNumber}];
//         console.log(email, randomNumber);

//         return new Response("전송 완료.", {status:201});
//     } catch (error) {
//        // console.log(error);
//         return new Response("Failed to create a new prompt", { status: 500 });
//     }
// }

// export const GET = async () => {
//     try {
//             return new Response(JSON.stringify({a:"get요청을하셨네요", b:"비입니다"}),{ status: 201 })
//     }  catch (error) {
//         return new Response("Failed to create a new prompt", { status: 500 });
//     }
// }
