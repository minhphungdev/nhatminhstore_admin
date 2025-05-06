import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default authMiddleware({
  publicRoutes: ["/:path*"],
  // Thêm logic sau khi authMiddleware chạy
  afterAuth: (auth, req: NextRequest) => {
    // Tạo response từ request
    const response = NextResponse.next();

    // Thêm các header CORS
    response.headers.set("Access-Control-Allow-Origin", "http://localhost:3001");
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    // Xử lý yêu cầu OPTIONS (preflight request)
    if (req.method === "OPTIONS") {
      return NextResponse.json({}, { status: 200 });
    }

    return response;
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};