import xml from '../utils/xml';
console.log('[test] run index.test.ts');

const xmlText = `<resources a='aaaa' b=10 d="hello 'dddddd' !">
  <component id="q81025" name="ItemRecycleRender.xml" path="/Component/" exported="true"/>
  <component id="q81027" name="ItemRecycleItemRender.xml" path="/Component/" exported="true"/>
  <component id="q81028" name="RecycleListView.xml" path="/Component/" exported="true"/>
  <resources>
    <component id="q81025" name="ItemRecycleRender.xml" path="/Component/" exported="true"/>
    <component id="q81027" name="ItemRecycleItemRender.xml" path="/Component/" exported="true"/>
    <component id="q81028" name="RecycleListView.xml" path="/Component/" exported="true"/>
  </resources>
</resources>
<resources>
  <component id="q81025" name="ItemRecycleRender.xml" path="/Component/" exported="true"/>
  <component id="q81027" name="ItemRecycleItemRender.xml" path="/Component/" exported="true"/>
  <component id="q81028" name="RecycleListView.xml" path="/Component/" exported="true"/>
</resources>`;

const element = xml.Element.parse(xmlText);

console.log(element);
