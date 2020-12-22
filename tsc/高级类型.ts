
type User2 = {
    name: string;
    age: number;
    occupation: string;
}

type Admin2 = {
    name: string;
    age: number;
    role: string;
}

type ALLS = User2 & Admin2;

type ASSS = {
    [P in Extract<keyof User2, keyof Admin2>]: ALLS[P]
}
const newAll: ASSS = {
    name: '',
    age: 1
}
// // 用竖线 表示联合类型 若为对象的话 则默认是等于后面的Admin？？
// // 传统的非对象式的话 我们只能访问此联合类型的所有类型里共有的成员。

// type Personss = User | Admin;


// const Ass: Personss = {
//     name: 'x',
//     age:12,
//     role: 'xzsa',
//     occupation: 's'
// }

// type Pers22 = 'name' | 'age' | 'role';

// const cionstna: Pers22 = 'name';



// const Ass2: (User & Admin) = {
//     name: 'x',
//     age:12,
//     occupation: 'xzsa',
//     role: 'asda'
// }

// interface Square {
//     kind: "square";
//     size: number;
// }
// interface Rectangle {
//     kind: "rectangle";
//     width: number;
//     height: number;
// }
// interface Circle {
//     kind: "circle";
//     radius: number;
// }

// type Shape = Square | Rectangle | Circle;

// function area(s: Shape) {
//     switch (s.kind) {
//         case "square": return s.size * s.size;
//         case "rectangle": return s.height * s.width;
//         case "circle": return Math.PI * s.radius ** 2;
//     }
// }


interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

type MyPerson = User | Admin;


const persons: MyPerson[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' }
];



// 类型收缩

function isAdmin(person: MyPerson): person is Admin {
    return person.type === 'admin';
}

function isUser(person: MyPerson) {
    return person.type === 'user';
}

function logPerson(person: MyPerson) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = (<User>person).occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

type PASK = keyof any;

// 用于创建字符串列表映射至 `K: V` 的函数
// function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
//     return o.reduce((res, key) => {
//       res[key] = key;
//       return res;
//     }, Object.create(null));
//   }
function strEnum<T extends string>(arr: Array<T>): { [K in T]: K } {
    const p = Object.create(null);
    arr.forEach((el) => {
        p[el] = el;
    });
    return p;
  }

  // 创建 K: V
  const Direction = strEnum(['s', 'South', 'East', 'West']);

  type MyRecord<K extends string | number | symbol, T> = { [P in K]?: T; }


  type List = 'aList' | 'bList' | 'cLict';
  interface myList {
      age?: number;
      name: string;
  }

type CarList = MyRecord<List, myList>

const myLisyt: CarList = {
    aList: {
        name: 'sasd'
    }
}

interface FooParams {
    type: 'foo';
    value: string;
  }

  interface BarParams {
    type: 'bar';
    value: number;
  }

  type Params = FooParams | BarParams;

  function test<T extends Params['type']>(
    type: T,
    value: Params['value'],
  ): void {}

  test('foo', 21);


  interface sefn {
      getName: (age: number, name: string) => string;
      name: string;
      age: number;
  }
  const getInfo: sefn = {
    name: 'string',
    age: 1,
    getName: (age: number, name: string) => {
        return name;
    }
  }
