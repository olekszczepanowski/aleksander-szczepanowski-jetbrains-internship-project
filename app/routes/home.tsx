import { Header } from "~/components/header/header";
import type { Route } from "./+types/home";
import { loadReleases } from "~/data/data";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Kotlin Programming Language" }];
}

export function loader() {
  const releases = loadReleases();
  return { releases };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { releases } = loaderData;

  return (
    <>
      <div className="bg-dark shadow-[inset_0_-1px_rgba(255,255,255,0.2)]">
        <Header url={releases.latest.url} version={releases.latest.version} />
      </div>
      <div className="h-128 bg-dark"></div>
    </>
  );
}

