namespace fairygui.utils {
    /** @description 匹配无用名字（fariygui自动生成的名字或者纯数字名字）*/
    const useless_name_reg = /^(\-|[0-9]|n[0-9]*$)/;    // 数字或负号开头+n开头数字结尾

    /** @description 名称是否合法*/
    export const isLegalName = (name: string) => !useless_name_reg.test(name);

    /** @description 获取合法的id（比如，防止出现数字开头的id）*/
    export const getLegalID = (id: string) => `_${id}`;

    // 不能使用通用算法转换的组件类型映射
    const FGUITypeMapping: Record<string, string | undefined> = {
        text: 'fairygui.GTextField',
        richtext: 'fairygui.GRichTextField',
        progressar: 'fairygui.GProgressBar',
        textinput: 'fairygui.GTextInput',
        scrollbar: 'fairygui.GScrollBar',
        movieclip: 'fairygui.GMovieClip'
    };

    /**
     * @description 类型映射
     * @author xfy
     * @param {string} type
     * @returns {string}
     */
    export function typeMapping(type: string): string {
        const existing = FGUITypeMapping[type];
        if (existing !== undefined) {
            return existing;
        }

        if (type.length < 1) {
            return type;
        }
        return `fairygui.G${type.substr(0, 1).toUpperCase()}${type.substr(1)}`
    }

}