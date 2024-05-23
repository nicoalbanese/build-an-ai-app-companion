// import { get } from "@vercel/edge-config";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";

export const OpenAIKey = async () => {
  // const key = await get<string>("openai_api_key");
  // const showKey = await get<boolean>("show_key");
  const test = await fetch("https://jsonplaceholder.typicode.com/posts/1")
  const data = await test.json()
  console.log(data)
  const key = "hello"
  const showKey = true
  return (
    <CodeBlock>
      <Pre className="px-4 text-[13px]">OPENAI_API_KEY={showKey ? key : "sk-*****-*************"}</Pre>
    </CodeBlock>
  );
};
