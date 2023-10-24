/* eslint-disable react/prop-types */
import "./table.css";
const Table = ({ data }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Medals</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.Id}>
              <td>{item.Year}</td>
              <td>{item.Medals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
