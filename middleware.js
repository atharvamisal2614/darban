import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const isPostRoute = (pathname) => {
  return pathname.startsWith("/book/success");
};

export async function middleware(req) {
  // console.log(req);
  const { pathname } = req.nextUrl;

  if (isPostRoute(pathname)) {
    return new NextResponse(
      JSON.stringify({
        message: "We have received your request you will get a mail shortly",
      })
    );

    // return NextResponse.rewrite("http://localhost:3000/airpay/responseairpay", {
    //   request: "GET",
    // });

    // return Response.redirect(
    //   "http://localhost:3000/airpay/responseairpay",
    //   302
    // );

    // return NextResponse.redirect(new URL("/book/success", req.url), 302);

    // return NextResponse.redirect(
    //   new URL("/airpay/responseairpay", req.url),
    //   302
    // );
  }

  const token = req.cookies.get("authorization");
  try {
    var key = process.env.ADMIN_SEC;
    const sec = new TextEncoder().encode(key);

    var admin = await jwtVerify(token.value, sec);

    if (admin.payload.admin.verified) {
      // req.admin = admin;
      return NextResponse.next();
    }
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.redirect(new URL("/auth/login", req.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin", "/admin/:path*", "/book/success"],
};
