import React from 'react';
import ReactDOM from 'react-dom';

import CounterList from './components/counter-list';

function App() {
    return (
        <div>
            <CounterList />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));