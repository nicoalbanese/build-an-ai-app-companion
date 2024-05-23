import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";

export async function OpenAIKey () {
  const res = await fetch(process.env.EC_FETCH ?? "")
  const {showKey, key} = await res.json()
  return (
    <CodeBlock>
      <Pre className="px-4 text-[13px]">OPENAI_API_KEY={showKey ? key : "sk-*****-*************"}</Pre>
    </CodeBlock>
  );
};
