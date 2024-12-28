import React from "react";
import { startBubbleSort } from "../Algorithum";

const Visualization: React.FC<{
  array: number[];
  setArray: React.Dispatch<React.SetStateAction<number[]>>;
}> = ({ array, setArray }) => {
  return (
    <div>
      <div className="bars">
        {array.map((bar, idx) => (
          <div
            key={idx}
            className="bar"
            style={{
              width: `${bar * 10}px`,
              //   backgroundColor: moveBar === idx ? "orange" : "green",
            }}
          ></div>
        ))}
      </div>
      <button onClick={()=>startBubbleSort(array,setArray)}>Start</button>
    </div>
  );
};

export default Visualization;
