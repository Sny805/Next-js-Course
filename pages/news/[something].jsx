import React from "react";
import { useRouter } from "next/router";

function something() {
  const router = useRouter();
  console.log(router.query.something);
  return <h1>something</h1>;
}

export default something;
