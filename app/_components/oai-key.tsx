import { get } from "@vercel/edge-config";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";

export const OpenAIKey = async () => {
  const key = await get("openai_api_key");
  const showKey = await get("show_key");
  return (
    <CodeBlock>
      {/* <Pre className="px-4 text-[13px]">OPENAI_API_KEY={showKey ? key : "sk-*****-*************"}</Pre> */}
      <Pre className="px-4 text-[13px]">
        <pre>{JSON.stringify({ showKey }, null, 2)}</pre>
      </Pre>
    </CodeBlock>
  );
};
