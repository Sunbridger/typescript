interface Alert{
    alert(msg:string):void,
    name:string
}
class Door{

}
class SerDoor extends Door implements Alert{
    alert(){//为何这里不做类型检查？
        console.log(this.name);
    };
    name:string;
    constructor(msg:string) {
        super();
        this.name = msg;
    }
}

new SerDoor('王日乔').alert();