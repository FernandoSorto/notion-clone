import RoomProvider from "@/components/RoomProvider";
import { auth } from "@clerk/nextjs/server";
import React from "react";

interface paramsId {
  id: string;
}

function DocLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<paramsId>;
}) {
  const { id } = React.use(params);
  auth.protect();
  return <RoomProvider roomId={id}>{children}</RoomProvider>;
}
export default DocLayout;
