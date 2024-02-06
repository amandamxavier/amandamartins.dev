import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="center">
      <Image
        src="/assets/images/animated/travolta.webp"
        alt="Scene of the John Travolta lost from the Pulp Fiction movie"
        width={480}
        height={270}
      />
      <p>Sorry, could not find what you&apos;re looking for...</p>
      <Link href="/">Go back to home</Link>
    </section>
  );
}
