import xml from '../utils/xml';
console.log('[test] run index.test.ts');

const attributes = xml.Attribute.parse(
  `<component id="kd9d4" name="MainUIView.xml" path="a/b/c/file.d.ts" exported=true abc=0 def='' desc="hello 'aaaa'!"/>`
);

console.log(attributes);
