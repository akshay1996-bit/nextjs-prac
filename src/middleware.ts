import { NextResponse, type NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  /**
   * Approach 1
   */
  // return NextResponse.redirect(new URL('/api/dashboard', request.url))

  /**
   * Approach 2
   */

//   if (request.nextUrl.pathname === "/api/profile") {
//     return NextResponse.redirect(new URL("/api/comments", request.url));
//   }

    /**
     * For Cookies
     */

    const response = NextResponse.next();

    const themePref = response.cookies.get('theme')

    if(!themePref){
        response.cookies.set('theme','dark')
    }

    // Adding custom header
    response.headers.set('Custome-header','Random-value')
    return response
};

/**
 * Part approach 1
 */

// export const config = {
//     matcher: '/api/profile'
// }
