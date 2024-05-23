import { get } from "@vercel/edge-config";
// import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";

export async function OpenAIKey () {
  const key = await get<string>("openai_api_key");
  const showKey = await get<boolean>("show_key");
  return (
    // <CodeBlock>
    //   <Pre className="px-4 text-[13px]">OPENAI_API_KEY={showKey ? key : "sk-*****-*************"}</Pre>
    // </CodeBlock>
    <pre>{showKey ? key : "sk***"}</pre>
  );
};
