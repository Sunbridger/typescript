import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export default class Hello extends React.Component<HelloProps,{}> {
    state = {
        name:'xxx'
    };
    render() {
        console.log(this.state,'state');
        return <div>
            <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
        </div>
    }
}