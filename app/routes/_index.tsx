import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Bug Reproduction
          </h1>
          <a href="https://github.com/cloudflare/workers-sdk/issues/7199">
            https://github.com/cloudflare/workers-sdk/issues/7199
          </a>
        </header>
      </div>
    </div>
  );
}
