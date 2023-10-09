
// 获取静态资源
export const getPath = (path: string): string =>  {
    const filePath = `../assets${path}`
    const url = new URL(filePath, import.meta.url)

    return url.href
}