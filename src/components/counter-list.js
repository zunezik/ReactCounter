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
                console.log(prevState)

                return {
                    counters: [prevState.counters, new Counter]
                };
            });
        }
    }

    prepareCounters() {
        let counters = this.state.counters;
        
        return counters.map((item) => {
            return (
                <Counter />
            )
        })
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