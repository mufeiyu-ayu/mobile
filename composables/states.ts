// 设置全局统一状态管理

type Theme = 'light' | 'dark'
/* @description vant 主题改变 */
export const changeThemeState = () => useState<Theme>('change', () => 'light')

/* @description  顶部背景颜色 */
export const headerBgState = () => useState<string>('headerBg', () => '')
/* @description 获取轮播图宽度 */
export const headerHeightState = () => useState<number>('headerHeight', () => 0)
