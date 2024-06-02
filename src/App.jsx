import React from "react";
import Linechart from "./Linechart";
import Piechart from "./Piechart";
import Horizontal from "./Horizontal";
import Doughnut from "./Doughnut";
import MultiLine from "./MultiLine";

const App = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-900 text-white gap-4 p-2">
      <Horizontal />
      <Doughnut />
      <Piechart />
      <MultiLine/>
      <Linechart />
    </div>
  );
};

export default App;
