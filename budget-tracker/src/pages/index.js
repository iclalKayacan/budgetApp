import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard"); // Direkt olarak dashboard'a yönlendirecek
  }, [router]);

  return null;
}
