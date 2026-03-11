import { readFileSync } from "node:fs";
import { join } from "node:path";
import yaml from "js-yaml";

function loadYaml<T>(filename: string): T {
  const filePath = join(process.cwd(), "app", "data", filename);
  const content = readFileSync(filePath, "utf-8");
  return yaml.load(content) as T;
}

export interface Releases {
  url: string;
  latest: {
    version: string;
    url: string;
  };
}

export function loadReleases(): Releases {
  return loadYaml<Releases>("releases.yml");
}
