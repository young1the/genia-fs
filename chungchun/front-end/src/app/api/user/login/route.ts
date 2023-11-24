export const POST = async (request: Request) => {
    try {
      const requestBody = await request.json();
      const serverUsers = await fetch(`${process.env.NEXT_PUBLIC_TEST_URL}/api/user.json`);
      const users = await serverUsers.json();
      let findUser = null;
      for (const key of Object.keys(users)) {
        const user = users[key];
        if (user.email == requestBody.email && user.password == requestBody.password) {
            findUser = {...user, ["Authorization"]: key};
            break ;
        }
      }
      if (findUser) {
        return new Response(JSON.stringify({
            nickName: findUser.nickName,
            profileImage: findUser.profileImage,
          }), {
            status: 201,
            headers: new Headers({
              'Authorization': `Bearer ${findUser.Authorization}`, 
              'Content-Type': 'application/json', 
            }),
          });
      }
      return new Response(JSON.stringify({ message: "실패." }), {
        status: 401,
      });
    } catch (error) {
      return new Response("Failed to create a new prompt", { status: 400 });
    }
  };