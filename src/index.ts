import { Command } from "commander";
import doctor from "./actions/doctor";
import install from "./actions/install";

const cli = new Command();

cli.name("tin").description("Installer cli for TokaPass").version("0.0.1");

cli
  .command("doctor")
  .description("just like flutter doctor")
  .option("--log", "Writes output to a text file")
  .action(doctor);

cli
  .command("install")
  .description("installs the password manager")
  .action(install);

cli.parse();
