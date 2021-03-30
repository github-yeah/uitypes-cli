namespace uit.snipet {
    /**@description snipet type*/
    export type Snipet = string | Snipet[];

    /** @description SnipetGeneratorType*/
    type SnipetGeneratorType = 'interface' | 'namespace' | 'class';

    /**
     * @description 创建代码片段
     * @author xfy
     * @param {string} name
     * @param {('interface' | 'namespace' | 'class')} type
     * @param {Snipet} contents
     * @param {('export' | 'declare' | '')} [prefix='']
     * @returns {Snipet}
     */
    export function generator(type: SnipetGeneratorType, name: string, contents: Snipet, prefix?: 'export' | 'declare'): Snipet[] {
        const _prefix = prefix ? `${prefix} ` : '';
        const snipets: Snipet[] = [
            `${_prefix}${type} ${name} {`,
            contents,
            `}`
        ];
        return snipets;
    }

    /**
     * @description snipet 转换成 string
     * @author xfy
     * @param {Snipet} snipet 代码片段
     * @returns {string}
     */
    export function toString(snipet: Snipet): string;
    /**
     * @description
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