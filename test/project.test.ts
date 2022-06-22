import { UIProject } from '../uitypes/project';

function startup(): void {
  const root = 'public/assets';
  // const root = 'E:/ylcs/trunk/tool/client/FairyGUI-Project/assets';
  const outFile = 'test/types/uitypes.d.ts';
  const publishName = 'uit';

  const timeLabel = '[uitypes-cli] 耗时';
  console.time(timeLabel);
  UIProject.compile(root, publishName, {
    format: true,
    // packages: ['Bag'],
    outFile,
  });
  console.timeEnd(timeLabel);
}
// startup();
