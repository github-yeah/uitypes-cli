namespace uit.xml2json {

    /**@description xml to json string*/
    const xml2js: {
        xml2json: (xml: string, options?: { compact?: true }) => string;
    } = require('xml-js');

    /**
     * @description 加载xml
     * @author xfy
     * @export
     * @param {string} xmlPath
     * @returns {(Type | undefined)}
     */
    export function load(xmlPath: string): Type | undefined {
        if (!uit.fs.existsSync(xmlPath)) {
            console.log(`找不到：${xmlPath}`);
            return undefined;
        }

        const buffer = uit.fs.readFileSync(xmlPath);
        const raw = buffer.toString();
        const jsonRaw = xml2js.xml2json(raw, { compact: true });
        const json = JSON.parse(jsonRaw);

        return {
            raw,
            json
        };
    }


    /** @description xml 返回对象*/
    export type Type = {
        raw: string;
        json: X2JElement;
    };

    // X2JElement < { version: string, encoding: string } >

    /** @description Element对象*/
    export type X2JElement<Attrubutes = undefined, Declaration = undefined> = {
        _declaration?: Declaration;
        _attributes?: Attrubutes;
        [n: string]: any;
    };
}