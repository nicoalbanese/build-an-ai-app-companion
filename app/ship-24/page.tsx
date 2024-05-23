import Link from "next/link";
import { OpenAIKey } from "../_components/oai-key";

export const dynamic = "force-dynamic";

export default function Ship24Page() {
  return (
    <main className="max-w-lg mx-auto pt-8">
      <Link href="/docs/project-setup" className="hover:underline">Back</Link>
      <OpenAIKey />
    </main>
  );
}
