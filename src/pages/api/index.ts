import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  return new Response("世界就是一个巨大的草台班子。", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Language": "zh-CN",
    },
  });
};
