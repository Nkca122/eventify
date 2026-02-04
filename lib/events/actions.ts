import { unstable_cache } from "next/cache";

export const getEvents = 
unstable_cache(
  async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events`);
    const data = await response?.json()

    if(data?.success) return data?.events;
    else return []
  },
  ["events"],
  {
    revalidate : 120
  }
);

