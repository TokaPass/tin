import nda from "node:os";
import { $ } from "bun";

let message = "";
const bunVersion = await $`bun --version`.text();
const pgSqlAvailable = (await $`psql --version`.text()) ? true : false;
const gitVersion = await $`git --version`.text();

export default async function doctor(options: any) {
  message += `Operating System: ${nda.version()}\n`;

  message += `Bun version: ${bunVersion}`;

  message += `PostgreSQL: ${pgSqlAvailable ? "Available" : "Needs installation"}\n`;

  message += `Git version: ${gitVersion}`;

  console.log(message);

  if (options.log) {
    Bun.write(__dirname + "/log.txt", message);
  }
}
