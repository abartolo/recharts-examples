import React from 'react';
import {
  PieChart,
  Pie,
  // Sector,
  // Cell,
} from 'recharts';


const DataViz = (props) => {
  const {
    data
  } = props;

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        outerRadius={150}
        fill="#8884d8"
      />
    </PieChart>
  );
}


export default DataViz;