import * as API from "@/lib/api";

export const POST = async (request: Request) => {
  try {
    const { email } = await request.json();
    email;
    const result = await fetch(
      process.env.NEXT_PUBLIC_API_SERVER + API.constants.URL["EMAIL_SEND"],
      {
        method: "POST",
      }
    );
    return result;
  } catch (error: any) {
    return new Response(undefined, { ...error.response });
  }
};
