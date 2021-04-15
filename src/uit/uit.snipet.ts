namespace uit.snipet {

    /**@description snipet type*/
    export type Snipet = string | Snipet[];

    /**
     * @description snipet转换成代码格式的字符串
     * @author xfy
     * @param {Snipet} snipet 代码片段
     * @returns {string}
     */
    export function toString(snipet: Snipet): string;
    /**
     * @description snipet转换成代码格式的字符串
     * @author xfy
     * @param {Snipet} snipet 代码片段
     * @param {string} tab  最外层的 tab
     * @returns {string}
     */
    export function toString(snipet: Snipet, tab: string): string;
    export function toString(snipet: Snipet, tab: string = ''): string {
        if (Array.isArray(snipet)) {
            return snipet.map(spt => Array.isArray(spt) ? toString(spt, `${tab}\t`) : toString(spt, tab)).join('\n');
        }
        return `${tab}${snipet}`;
    }
}

/** @description typescript snipet templete*/
namespace uit.snipet.ts {
    /**
     * @description 大括号代码片段
     * @author xfy
     * @export
     * @param {Snipet} contents
     * @param {string} [prefix]
     * @returns {string}
     */
    export function braceOf(contents: Snipet, prefix?: string): Snipet[] {
        const head = prefix ? `${prefix} {` : '{';
        const snpts = [
            head,
            contents,
            '}'
        ];
        return snpts;
    }

    /**
     * @description 创建代码片段
     * @author xfy
     * @param {string} name
     * @param {('interface' | 'namespace' | 'class')} type
     * @param {Snipet} contents
     * @param {('export' | 'declare' | '')} [prefix='']
     * @returns {Snipet}
     */
    export function generator(type: 'interface' | 'namespace' | 'class', name: string, contents: Snipet, prefix?: 'export' | 'declare' | 'abstract'): Snipet[] {
        const _prefix = prefix ? `${prefix} ` : '';
        return braceOf(contents, `${_prefix}${type} ${name}`)
    }
}



