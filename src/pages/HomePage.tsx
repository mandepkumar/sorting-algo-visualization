import React, { useState } from "react";
import Visualization from "../components/Visualization";
import { generateRandom } from "../utils";

function HomePage(): React.ReactElement {
  const [array, setArray] = useState<number[]>(generateRandom());
  const [moveBar, setMoveBar] = useState(-1);

  return (
    <>
      <h2>Sorting Algo Visuallization</h2>
      <div>
        <div>
          <label>Select Algo</label>
          <select>
            <option>Bubble Sort</option>
          </select>
        </div>
        <Visualization array={array} setArray={setArray} />
      </div>
    </>
  );
}

export default HomePage;
