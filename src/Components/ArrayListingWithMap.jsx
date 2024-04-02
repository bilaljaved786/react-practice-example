import React from "react";
import "../App.css";

export default function ArrayListingWithMap() {
  // const names = ["bilal", "javed", "mughal"];

  const students = [
    { name: "bilal", age: 20 },
    { name: "adeel", age: 19 },
    { name: "sana", age: 22 },
  ];

  return (
    <div className="App">
      <h1>Render array using map function </h1>

      {/* ! Rendering array of names of type string */}
      {/* {names.map((name, index) => (
        <ul>
          <li>
            {index} name is : {name}
          </li>
        </ul>
      ))} */}

      {/* ! rendering array of object */}
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </tbody>
        {students.map((std, index) => (
          <tr key={index}>
            <td>{std.name}</td>
            <td>{std.age}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
