import { headers } from "next/headers";

export default async function Page() {
  const headersFromReq = await headers();
  const host = headersFromReq.get("host")
  const responseSST = await fetch("https://sst.dev", {
    next: {
      tags: ["path"],
    },
    cache: 'force-cache'
  });
  // This one doesn't have a tag
  const responseOpenNext = await fetch("https://opennext.js.org", {
    cache: 'force-cache'
  });
  const reqIdSst = responseSST.headers.get("x-amz-cf-id");
  const dateInOpenNext = responseOpenNext.headers.get("date");
  return (
    <div>
      <h3>Host: {host}</h3>
      <h1>Request id from SST</h1>
      <p>RequestID: {reqIdSst}</p>
      <h1>Date from from OpenNext</h1>
      <p>Date: {dateInOpenNext}</p>
    </div>
  );
}
