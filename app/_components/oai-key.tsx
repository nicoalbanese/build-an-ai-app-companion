import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { headers } from "next/headers";

export async function OpenAIKey () {
  const head = headers();
  const res = await fetch(process.env.EC_FETCH ?? "")
  const {openai_api_key: key, show_key: showKey} = await res.json()
  return (
    <CodeBlock>
      <Pre className="px-4 text-[13px]">OPENAI_API_KEY={showKey ? key : "sk-*****-*************"}</Pre>
    </CodeBlock>
  );
};
