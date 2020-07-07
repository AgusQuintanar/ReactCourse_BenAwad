import React from "react";

export default class Counter extends React.Component {

    state = {
        count: 0
    };
    

    increment = () =>  {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrement = () =>  {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {
        return (
        <div>
            <div>
                Count: {this.state.count}
            </div>
            <button onClick={this.decrement}>
                Decrement
            </button>
            <button onClick={this.increment}>
                Increment
            </button>
        </div>
        );
    }
}