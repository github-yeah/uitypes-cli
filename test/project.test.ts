import { writeFileSync } from "fs";
import { UIProejct } from "../uitypes/project";

function startup(): void {
  // const root = "public/assets";
  const root = "E:/ylcs/trunk/tool/client/FairyGUI-Project/assets";
  const outFile = "test/types/uitypes.d.ts";
  const publishName = "uit";

  const timeLabel = "[uitypes-cli] 耗时";
  console.time(timeLabel);

  const project = UIProejct.load(publishName, root);
  if (project === undefined) {
    return;
  }
  const code = UIProejct.compile(project, undefined, true);
  writeFileSync(outFile, code);
  console.timeEnd(timeLabel);
}
startup();
