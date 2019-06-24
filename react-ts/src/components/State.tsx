import * as React from "react";

interface MyProps{
    info:{
        birth:number;
        where:string;
    };
}
interface MyState{
    name:string;
    age:number;
    flage:boolean;
    <t>(pics:t[]):t[]; //其实这里只用了string[]
}
// 使用泛型对props和state进行检查 顺序不能反
/**
 * 定义后在使用 this.state 和 this.props 时可以在编辑器中获得更好的智能提示，并且会对类型进行检查。
 */
export default class State extends React.Component<MyProps,MyState> {
    public state={
        name:'Sunbridger',
        age:18,
        flage:false,
        pics:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmV7RRQtFoXHWahuFml-1yzcHrrEzLEivxKhwWs09bBxgB8JrY']
    };
    showMore(){
        this.setState({
            flage:true
        })
    }
    render() {
        const { name,age,flage,pics } = this.state;
        const { info } =this.props;
        return <div>
            姓名：{name} 年龄：{age}
            相册：
            {
                pics.map((url,index)=>{
                    <img src={url} key={index} />
                })
            }
            {
                flage&&<div>
                  生日：{info.birth} 住处：{info.where}
              </div>  
            }
            <p onClick={this.showMore.bind(this)}>展示更多信息</p>
        </div>
    }
}