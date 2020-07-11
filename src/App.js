import React from 'react';

import DataViz from './DataViz';
import './App.css';

const data = [
  { name: 'Savings & Investments', value: 500 },
  { name: 'Recurring Expenses', value: 300 },
  { name: 'Spending', value: 1200 },
  { name: 'Remaining', value: 650 },
];

function App() {
  return (
    <div className="App">
      <DataViz data={data} />
    </div>
  );
}

export default App;
