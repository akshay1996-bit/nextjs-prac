import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";
export async function GET(request: NextRequest) {
  const headersFromReq = new Headers(request.headers);
  const headerFromFn = headers();
  const cookie = request.cookies.get("cookieName");
  cookies().set("cookie2", "name2");
  console.log("headers", headersFromReq.get("Authorization"));
  console.log("headersFromFn", headerFromFn.get("Authorization"));
  console.log("cookies", cookie);
  console.log('cookie2',cookies().get('cookie2'))
  return new Response("<h1>Profile API</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "cookieName=goodday",
    },
  });
}
