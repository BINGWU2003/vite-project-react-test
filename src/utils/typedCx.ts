import classNames from 'classnames/bind'

/**
 * 强类型 cx 构造器
 * @param styles 导入的 CSS Modules 对象
 */
export function createCx<T extends Record<string, string>>(styles: T) {
  const cx = classNames.bind(styles)

  // 定义参数类型：可以是 styles 的 key，或者是以 key 为键的布尔对象
  type ClassNameArg =
    | keyof T
    | { [K in keyof T]?: boolean | undefined | null }
    | undefined
    | null
    | false

  return (...args: ClassNameArg[]) => cx(...(args as any))
}
