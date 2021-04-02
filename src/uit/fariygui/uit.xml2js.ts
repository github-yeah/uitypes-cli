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
        // const jsonRaw = xml2js.xml2json(raw, { compact: true });
        const jsonRaw = xml2js.xml2json(raw);
        // console.log(jsonRaw);
        const json = JSON.parse(jsonRaw);

        return {
            raw,
            json
        };
    }


    /** @description xml 返回对象*/
    export type Type = {
        raw: string;
        json: File;
    };

    /** @description 文件类型*/
    export type File = {
        declaration: { attributes: { version: string, encoding: string } };
        elements?: Element[];
    }

    /** @description Element类型*/
    export type Element<Attribute = any> = {
        type: string,
        name: string,
        attributes?: Attribute,
        elements?: Element[]
    }
}