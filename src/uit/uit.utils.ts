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


    /**
     * @description 强制创建文件夹
     * @author xfy
     * @export
     * @param {string} directory
     */
    export async function mkDirForce(directory: string) {
        let directroyString = directory.toString();
        const dirs: string[] = [];
        while (!fs.existsSync(directroyString)) {
            dirs.push(uit.path.basename(directroyString));
            directroyString = uit.path.dirname(directroyString);
            if (!directroyString) {
                break;
            }
        }

        await dirs.reduceRight(
            (prev, curr) => {
                prev = uit.path.join(prev, curr);
                fs.mkdirSync(prev);
                return prev;
            },
            directroyString
        );

    }
}