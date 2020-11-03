// Typescript 复杂泛型实践：如何切掉函数参数表的最后一个参数？


// 反转参数
// type A<T extends []> = Reverse<T>

// type Reverse<Tuple extends any[], Prefix extends [] = []> = {
//     0: Prefix
//     1: ((..._: Tuple) => any) extends ((_0: infer First, ..._1: infer Next) => any)
//         ? Reverse<Next, Prepend<Prefix, First>>
//         : never
// }[Tuple extends [any, ...any[]] ? 1 : 0]

// interface LengthWise {
//     length: number
//   }

//   function loggingIdentity<T extends LengthWise>(arg: T): T {
//     console.log(arg.length)
//     return arg
//   }
// interface GenericIdentityFn {
//     <T>(arg: T): T;
//     name: string;
//   }

//   function identity<T>(arg: T): T {
//     return arg;
//   }

//   let myIdentity: GenericIdentityFn = identity;

type MyPartial<T> = { [P in keyof T]?: T[P] };



type MyNewPerson = MyPartial<Person> & MustApi;
// type MyS<T> = keyof string;

// const newPer: MyNewPerson = {
//     iphone: 12,
//     id: 21
// };

// keyof 获取某个属性
// 获取对象属性值
function getVal<T extends object, U extends keyof T>(obj: T, key: U): T[U] {
    return obj[key];
}

getVal({
    name: 'xxx'
}, 'name');

interface Person {
    name: string;
    age: number;
}

interface MustApi {
    iphone: number;
    id: number;
    name: string;
    age: number;
}

interface newPr extends Person {
    iphone: number;
    id: number;
}

type getBigType<T, U> = T extends U ? never : T;// 找出T的差集
type getSamllType<T, U> = T extends U ? T : never; // 找出交集

type T30 = getBigType<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // => "b" | "d"

type T32 = getSamllType<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // => "a" | "c"


type T34 = getBigType<newPr, Person>
type T35 = getBigType<Person, MustApi>

type UnOne = T30 & ('d' | 'sad'); // 交集

type UnOne2 = T30 | ('d' | 'sad'); // 并集

const ntf: UnOne = 'd';

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

type MyRequired<T> = {
    [P in keyof T]-?: T[P]
}

const mustAll: MyRequired<Person> = {
    name: 'xx',
    age: 1,
    id: 2,
    createdAt: 'asa',
    updatedAt: 'xx'
}

type pickSom = MyPick<MustApi, 'id'>; // 从MustApi 中获取id的属性

type MyExclude<T, U> = T extends U ? never : T;


type MyOmit<T, K> = MyPick<T, MyExclude<keyof T, K>>;

type aasd = Omit<MustApi, 'id'>  // 从MustApi 中去除id的属性
// omit的原理就是 从T中去除传入的一个key
// 那就是获取出id之外的所有的属性 也就是pick所有的右值
// 只需要对右值进行反选即可 <'a' | 'b', 'a'> //  T extends U ? nerve : T; b
