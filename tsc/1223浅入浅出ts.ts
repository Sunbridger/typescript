// 值 和 类型
// js对值编程、ts对类型编程
// 我们都知道JS是一门弱类型语言，（什么是弱类型语言呢？举个例子证明下：）
// TS提供的是一套类型系统 刚好就补充了js的缺陷
// 我们平常都是用js对值进行编程，这个可以理解的吧，
// js不是提供了个typeof么？ 我想大家上一次在使用typeof的时候可能是写一些工具库校验或者啥的
// 实际业务基本很少用对不对
// ts中typeof算是关键字 下面我们会讲到

// 举个例子
// if (err.code === '10001' && isNoLogout) {
//     Variable.vm.$store.dispatch('doLogout');
// }

// const personNames = persons.map(p => p.name)
// ...
// 可以看出我们都是在对具体的值进行编程
// 这符合我们对现实世界的抽象
// 值的集合其实就是类型的集合 他们是相辅相成  就像说值必须要有类型（人必须要有名字）
// 那其实在js中我们大部分时间对这个类型是不care的
// 就好比古代的女子甚至都没有名字的都是跟随着丈夫的姓氏 比如红楼梦中贾府的贾母（她老公叫贾代善 老早就去世了）
// 现在我们可以好好的聊一下这个类型
// 首先还是先说一下ts的一个设计目标吧
// https://github.com/Microsoft/TypeScript/wiki/TypeScript-Design-Goals
