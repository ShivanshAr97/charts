import React from "react";
import Linechart from "./Linechart";
import Piechart from "./Piechart";
import Horizontal from "./Horizontal";
import Doughnut from "./Doughnut";
import Radarchart from "./Radarchart";

const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      <h1 className="text-4xl font-bold py-4 text-center">
        WiJungle - by HttpCart Assignment
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2">
        <Horizontal />
        <Doughnut />
        <Piechart />
        <Radarchart />
      </div>
      <div className="p-2">
        <Linechart />
      </div>
    </div>
  );
};

export default App;
