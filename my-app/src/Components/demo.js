import React, { useEffect, useState } from "react";
import axios from "axios";

const Home1 = () => {
  const [demo, setDemo] = useState([""]);
  useEffect(() => {
    const getDemo = async () => {
      const res = await axios.post(
        "https://eventrra.000webhostapp.com/getAllDemoFile.php"
      );
      setDemo(res.data);
    };
    getDemo();
  }, []);

  if (demo) {
    var demoData = demo.map((val, i) => (
      <tr key={i}>
        <td key={val._id} className="clm1">
          {i + 1}
        </td>
        <td className="clm2">{val.Row1}</td>
        <td className="clm3">{val.Row2}</td>
        <td className="clm4">{val.Row3}</td>
        <td className="clm5">
          <button className="btn btn-primary">Edit</button>&ensp;
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    ));
  } else {
    demoData = (
      <tr>
        <td colSpan="4">No Records Found</td>
      </tr>
    );
  }

  return (
    <div>
      <br />
      <br />
      <center>
        <h1>All demo</h1>
      </center>
      <div>
        <br />
        <br />
        <center>
          <table bordered className="table-city">
            <thead>
              <tr>
                <th className="clm1">#</th>
                <th className="clm2">Row1</th>
                <th className="clm3">Row2</th>
                <th className="clm4">Row3</th>
                <th className="clm5">Action</th>
              </tr>
            </thead>
            <tbody>{demoData}</tbody>
          </table>
        </center>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home1;
