import * as React from "react";
import { Button,Carousel } from 'antd';
import 'antd/dist/antd.css';
export default class AntdCom extends React.Component{
    render(){
        return <div>
            <Carousel autoplay>
                <div>
                    <h3>10</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel>
            <Button type="primary">Button</Button>
        </div>
    }
}