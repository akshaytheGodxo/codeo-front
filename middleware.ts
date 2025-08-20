import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: any) {
    const token = req.cookies.get("auth_token")?.value;

    if (!token) return NextResponse.next();

    try {
        await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
        return NextResponse.next();
    } catch (error) {
        return NextResponse.next();
    }
}