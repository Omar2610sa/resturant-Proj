import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { TOKEN_NAME } from "./lib/constants";

const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
export default async function proxy(request: NextRequest) {
    const token = request.cookies.get(TOKEN_NAME)?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/login?reason=unauthenticated", request.url));
    }

    try {
        const { payload } = await jwtVerify(token, secret);

        if (payload.role !== "admin") {
            return NextResponse.redirect(new URL("/?reason=forbidden", request.url));
        }

        return NextResponse.next();
    } catch {
        const res = NextResponse.redirect(new URL("/login", request.url));
        res.cookies.delete(TOKEN_NAME);
        return res;
    }
}

export const config = {
    matcher: ["/dashboard/:path*"],
};