import { writeFileSync } from 'fs';
import { UIProject } from '../uitypes/project';
import { fairygui } from '../uitypes/fairygui.config';

function startup(): void {
  // fairygui.Config.loadPackage('public/assets/UILib/package.xml');
  // return;
  const root = 'public/assets';
  // const root = 'E:/ylcs/trunk/tool/client/FairyGUI-Project/assets';
  const outFile = 'test/types/uitypes.d.ts';
  const publishName = 'uit';

  const timeLabel = '[uitypes-cli] 耗时';
  console.time(timeLabel);
  const code = UIProject.compile(root, publishName, true);
  writeFileSync(outFile, code);
  console.timeEnd(timeLabel);
}
startup();
