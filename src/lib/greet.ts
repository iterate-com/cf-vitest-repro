import { readFile } from "node:fs/promises";

export async function greet() {
  const pkgJson = await readFile("./package.json", "utf-8");
  const pkg = JSON.parse(pkgJson);

  console.log("Hello from package", pkg.name);
}
