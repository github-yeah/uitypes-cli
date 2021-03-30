namespace uit.utils {

    /**
     * @description 剔除扩展名
     * @author xfy
     * @param {string} path
     * @returns {string}
     */
    export function rejectExtension(path: string): string {
        return path.replace(/\..+$/, '');
    }

    /**
     * @description 路径转换成引用路径  /a/b/c.ts => a.b.c
     * @author xfy
     * @param {string} path
     * @returns {string}
     */
    export function toRefrence(path: string): string {
        return rejectExtension(path)
            .replace(/^(\/|\\)+|(\/|\\)+$/g, '')
            .replace(/\/|\\/g, '.');
    }

}