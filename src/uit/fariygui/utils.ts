namespace fairygui.utils {
    /** @description 匹配无用名字（fariygui自动生成的名字或者纯数字名字）*/
    const useless_name_reg = /^(\-|[0-9]|n[0-9]*$)/;    // 数字或负号开头+n开头数字结尾

    /** @description 名称是否合法*/
    export const isLegalName = (name: string) => name.length > 0 && !useless_name_reg.test(name);

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


    /**
     * @description 生成组件代码片段
     * @author xfy
     * @export
     * @param {string} name 组件名称
     * @param {string} supertype 父类型
     * @param {uit.snipet.Snipet[]} children 子显示列表代码片段
     * @param {string} controllers  controller names
     * @param {string} transitions transition names
     * @returns {uit.snipet.Snipet[]}
     */
    export function toComponentSnipets(
        name: string,
        supertype: string,
        children: uit.snipet.Snipet[],
        controllers: string,
        transitions: string): uit.snipet.Snipet[] {
        const lines: uit.snipet.Snipet[] = [
            `type ${name} =  __UIComponent<${supertype}, {`,
            children,
            `}, ${controllers}, ${transitions}>;`
        ];
        return lines;
    }

    /**
    * @description 创建顶层类型对象
    * @author xfy
    * @param {string} [name='__UIComponent']
    * @returns {uit.snipet.Snipet[]}
    */
    export function createHeaderSnipets(name: string = '__UIComponent'): uit.snipet.Snipet[] {
        return [
            `type ${name}<Base, Children, Controllers extends string = string, Transitions extends string = string> = Base & {`,
            [
                'getChild<Key extends keyof Children>(name: Key, explicitType: true): Children[Key];',
                'getController(name: Controllers): fairygui.Controller;',
                'getTransition(transName: Transitions): fairygui.Transition;'
            ],
            '};'
        ];
    }

}