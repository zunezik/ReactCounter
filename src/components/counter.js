import React from 'react';

export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count : 0
        };

        this.inc = () => {
            this.setState((prevState) => {
                return {
                    count: ++prevState.count
                };
            });
        }
    }

    render() {
        const {count} = this.state;

        return (
            <div>
                <button onClick={this.inc}>inc</button>
                <span>{count}</span>
            </div>
        );
    }
}