import Counter from "./counter";
import { useState } from "react";

const CountersList = () => {
     const initialState = [
          { id: 0, value: 0, name: "alfaMist" },
          { id: 1, value: 42, name: "poppyAjudha" },
          { id: 2, value: 0, name: "feist" },
     ];
     const [counter, setCounter] = useState(initialState);
     const handleDelete = (id) => {
          const newCounter = counter.filter((item) => item.id !== id);
          setCounter(newCounter);
     };
     const handleReset = () => {
          setCounter(initialState);
     };
     const handleUpdate = () => {
          const updatedState = [
               { id: 0, value: 5, name: "alfaMist" },
               { id: 1, value: 42, name: "poppyAjudha" },
               { id: 2, value: 102, name: "feist" },
          ];
          setCounter(updatedState);
     };
     const handleIncrement = (id) => {
          const newCounter = counter.map((item) => {
               if (item.id === id) {
                    return { ...item, value: item.value + 1 };
               }
               return item;
          });
          setCounter(newCounter);
     };
     const handleDecrement = (id) => {
          const newCounter = counter.map((item) => {
               if (item.id === id) {
                    return { ...item, value: item.value - 1 };
               }
               return item;
          });
          setCounter(newCounter);
     };
     return (
          <>
               {counter.map((item) => (
                    <Counter
                         key={item.id}
                         {...item}
                         onDelete={handleDelete}
                         onIncrement={handleIncrement}
                         onDecrement={handleDecrement}
                    />
               ))}
               <button className="btn btn-dark btn-sm m-2" onClick={handleReset}>
                    Reset
               </button>
               <button className="btn btn-dark btn-sm m-2" onClick={handleUpdate}>
                    Update
               </button>
          </>
     );
};
export default CountersList;
