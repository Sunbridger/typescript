import * as React from "react";
import Hello from './components/Hello';
import State from './components/State';
export default class App extends React.Component{

    render() {
        const obj = {
            birth:1996,
            where:'江西'
        }
        return <div>
            <Hello compiler="TypeScript" framework="React"  />
            <State info={obj} />
        </div>
    }
}