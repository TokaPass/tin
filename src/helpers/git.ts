import { $ } from "bun";

async function cloneRepo(repoUrl: string, path: string = "toka") {
  try {
    let copyPath = path ? path : __dirname + "/toka";

    await $`git clone ${repoUrl} ${path}`;

    return true;
  } catch (err) {
    return false;
  }
}

export { cloneRepo };
