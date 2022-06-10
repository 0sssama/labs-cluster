import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  // next.js router
  const router = useRouter();

  // redirecting to /e1
  useEffect(() => {
    router.push("/e1");
  }, []);

  return null;
}
