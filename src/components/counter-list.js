import React from 'react';

import Counter from './counter';

export default class CounterList extends React.Component {
    constructor() {
        super();
        this.state = {
            counters: [new Counter]
        };

        this.addCounter = () => {
            this.setState((prevState) => {
                let newCounters = prevState.counters;
                newCounters.push(new Counter);

                return {counters: newCounters};
            });
        }
    }

    prepareCounters() {
        let counters = this.state.counters;
        
        return counters.map(() => <Counter />)
    }
  
    render() {
        let counters = this.prepareCounters();

        return (
            <div>
                <button onClick={this.addCounter}>Add counter</button>
                {counters}
            </div>
        );
    }
}