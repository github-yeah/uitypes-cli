import { writeFileSync } from "fs";
import { UIProejct } from "../uitypes/project";

function startup(): void {
  const root = "public/assets";
  const outFile = "test/types/uitypes.d.ts";
  const publishName = "uit";
  const project = UIProejct.load(publishName, root);
  if (project === undefined) {
    return;
  }
  const code = UIProejct.compile(project);
  writeFileSync(outFile, code);
}
startup();
