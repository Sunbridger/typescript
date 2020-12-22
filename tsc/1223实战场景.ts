// 使用type
// ts内置的type还是有很多中的 可以去源码中看自己喜欢的挑着用
// type PropertyKey = string | number | symbol

// 使用promise
// new <T>(executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;

// interface Promise<T> {
//     then<TResult1 = T>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null): Promise<TResult1 | TResult2>;
//     catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
// }

type ppResult = {
    data: object;
    code: number;
    msg: string;
    traceId: string;
}

type thenResult = {
    data: object;
}

function getVal() {
    return new Promise<ppResult>((resolve, reject) => {
        // 异步请求数据mock
        setTimeout(() => {
            resolve({
                data: {},
                code: 200,
                msg: '',
                traceId: 'string'
            })
        }, 500);
    });
}
// then中的res 可以自己改动 只要满足T是它的子类型就可以 例如 res:thenResult 这个能作用到类型缩小

getVal().then((res) => {
    console.log(res);
});

// /Users/sunbridger/Desktop/mycode/typescript-study/node_modules/typescript/lib/lib.es5.d.ts
// new Promise<ppResult>((resolve, reject) => {
//     // 异步请求数据mock
//     setTimeout(() => {
//         resolve({
//             name: 'xx',
//             age: 12
//         })
//     }, 500);
// }).then((res) => {
//     console.log(res);
// })

// 使用Record

// vue中常用场景是生成对象字面量
const decodeMap: Record<string, string> = {
    gt: '>',
    lt: '<',
    amp: '&',
    apos: "'",
    quot: '"'
}

const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'


// 使用 infer

type getData<T> = T extends { data: infer V } ? { data: V } : T


const data1 = {
    data: {
        name: 'Sunbridger',
        age: 12
    }
};


const data2 = {
    name: 'Sunbridger',
    age: 12
};

const myData1: getData<typeof data1> = data1;

const myData2: getData<typeof data2> = data2;


// 递归操作 所有属性变为可选的
type DeepPartial<T> = T extends Function
    ? T
    : T extends object
    ? { [P in keyof T]?: DeepPartial<T[P]> }
    : T;

type PartialedWindow = DeepPartial<Window>; // 现在window 上所有属性都变成了可选啦
