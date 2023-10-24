/* eslint-disable react/prop-types */
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const Graph = ({ data }) => {
  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="Year"
        type="number"
        domain={["dataMin", "dataMax"]}
        label={{ value: "Year", position: "insideBottom", offset: -10 }}
      />
      <YAxis label={{ value: "Medals", angle: -90, position: "insideLeft" }} />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Medals"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default Graph;
