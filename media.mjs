import { getStore } from "@netlify/blobs";

const store = getStore({ name: "ilvora-site-media", region: "ap-southeast-1" });

export default async (req, context) => {
  const key = context.params?.splat || new URL(req.url).searchParams.get("key");
  if (!key) return new Response("Missing media key", { status: 400 });
  const blob = await store.get(key, { type: "blob" });
  if (!blob) return new Response("Not found", { status: 404 });
  const type = blob.type || "application/octet-stream";
  return new Response(blob, { headers: { "Content-Type": type, "Cache-Control": "public, max-age=31536000, immutable" } });
};
