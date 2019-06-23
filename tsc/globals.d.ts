/**
 * 用 ts 写的模块在发布的时候仍然是用 js 发布，
 * 这就导致一个问题：ts 那么多类型数据都没了，
 * 所以需要一个 d.ts 文件
 * 来标记某个 js 库里面对象的类型
然后 typings 就是一个网络上的 d.ts 数据库
 */
declare function getName(name:string):string;