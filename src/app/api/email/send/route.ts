import * as API from "@/lib/api";
import { axios } from "@/lib/api/axios";

export const POST = async (request: Request) => {
  try {
    const { email } = await request.json();
    email;
    const result = await axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + API.constants.URL["EMAIL_SEND"],
      {
        validateStatus: (status: number) => {
          return status < 500;
        },
      }
    );
    return result;
  } catch (error: any) {
    return new Response(undefined, { ...error.response });
  }
};
