import { pageTree } from "../source";
import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={pageTree} nav={{ title: "Build an AI App on Vercel" }}>
      {children}
    </DocsLayout>
  );
}
