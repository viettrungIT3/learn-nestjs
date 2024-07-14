import ProfileForm from "@/app/me/profile-form";
import envConfig from "@/config";
import { cookies } from "next/headers";
import React from "react";

export default async function MeProfile() {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");
  // Vì dùng cookie nên api này không được cached trên server
  // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#opting-out-of-data-caching

  const result = await fetch(
    `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/account/me`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionToken?.value}`,
      },
    }
  ).then(async (res) => {
    const payload = await res.json();
    const data = {
      status: res.status,
      payload,
    };
    if (!res.ok) {
      throw data;
    }
    return data;
  });
  return (
    <div>
      <h1>Profile</h1>
      <p>
        Xin chào:
        <b> {result.payload.data.name}</b>
      </p>
      <div>
        <ProfileForm profile={result.payload.data} />
      </div>
    </div>
  );
}
