import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { drizzle } from "drizzle-orm/postgres-js";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ context }: LoaderFunctionArgs) {
  const { env } = context.cloudflare;
  const db = drizzle(env.DB_TEST.connectionString);
  const result = await db.execute("select 1");
  return { result };
}

export default function Index() {
  const { result } = useLoaderData<typeof loader>();
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
          <p>Result:</p>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </header>
      </div>
    </div>
  );
}
