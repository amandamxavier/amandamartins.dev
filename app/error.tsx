"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="center">
      <Image
        src="/assets/images/animated/fine.webp"
        alt="This is fine meme"
        width={480}
        height={204}
      />
      <p>Oh no, something went wrong!</p>
      <button onClick={() => reset()}>Try again</button>
    </section>
  );
}
