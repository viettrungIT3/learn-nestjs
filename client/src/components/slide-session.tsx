"use client";

import authApiRequest from "@/apiRequests/auth";
import { clientSessionToken } from "@/lib/http";
import ms from "ms";
import { useEffect } from "react";

export default function SlideSession() {
  useEffect(() => {
    const sessionTimeStr = process.env.NEXT_PUBLIC_SESSION_SLIDE_INTERVAL;
    if (!sessionTimeStr) {
      console.error("NEXT_PUBLIC_SESSION_SLIDE_INTERVAL is not defined");
      return;
    }

    const sessionTimeMs = ms(sessionTimeStr);
    if (sessionTimeMs === undefined) {
      console.error("Invalid NEXT_PUBLIC_SESSION_SLIDE_INTERVAL format");
      return;
    }

    const interval = setInterval(async () => {
      const now = new Date();
      const expiresAt = new Date(clientSessionToken.expiresAt);
      const timeLeft = expiresAt.getTime() - now.getTime();

      // Kiểm tra nếu thời gian còn lại ít hơn thời gian refresh
      if (timeLeft < sessionTimeMs) {
        try {
          const res =
            await authApiRequest.slideSessionFromNextClientToNextServer();
          clientSessionToken.expiresAt = res.payload.data.expiresAt;
          console.log("Slide session success: " + res.payload.data.expiresAt);
        } catch (error) {
          console.error("Failed to slide session:", error);
        }
      }
    }, sessionTimeMs); // Thực hiện kiểm tra mỗi nửa thời gian refresh

    return () => clearInterval(interval);
  }, []);

  return null;
}
