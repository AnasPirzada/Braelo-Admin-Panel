import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
   
    Profit: 4000,
    Sales: 2400,
    amt: 2400,
  },
  {
  
    Profit: 3000,
    Sales: 1398,
    amt: 2210,
  },
  {
    
    Profit: 2000,
    Sales: 9800,
    amt: 2290,
  },
  {

    Profit: 2780,
    Sales: 3908,
    amt: 2000,
  },
  {

    Profit: 1890,
    Sales: 4800,
    amt: 2181,
  },
  {

    Profit: 2390,
    Sales: 3800,
    amt: 2500,
  },
  {

    Profit: 3490,
    Sales: 4300,
    amt: 2100,
  },
];

export default class LineCharts extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="10 10" /> */}
          <XAxis dataKey="name" style={{fontSize:'10px'}} />
          <YAxis  style={{fontSize:'10px'}}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Sales" stroke="#F3A000" strokeWidth={3} activeDot={{ r: 8 }} style={{height:'4px'}} />
          <Line type="monotone" dataKey="Profit" stroke="#FFE8BA" strokeWidth={3} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
