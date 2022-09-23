import { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
     const initailValues = [
          { id: 0, value: 0, name: "Ненужная вещь" },
          { id: 1, value: 1, name: "Ложка" },
          { id: 2, value: 0, name: "Вилка" },
          { id: 3, value: 0, name: "Тарелка" },
          { id: 4, value: 0, name: "Набор минималиста" },
     ];
     const [counters, setCounters] = useState(initailValues);
     const handleDelete = (id) => {
          const newCounters = counters.filter((person) => person.id !== id);
          setCounters(newCounters);
     };
     const handleReset = () => {
          setCounters(initailValues);
     };
     const handleI = (id) => {
          const newCounters = counters.filter((item) => (item.id = id + 1));
          setCounters(newCounters);
     };
     const handleD = (id) => {
          const newCounters = counters.map((item) => (item.id = id + 1));
          setCounters(newCounters);
     };
     //   const handleD
     return (
          <>
               {counters.map((person) => (
                    <Counter key={person.id} onDelete={handleDelete} {...person} onI={handleI} onD={handleD} />
               ))}
               <button className="btn btn-info btn-sm m-2" onClick={handleReset}>
                    Reset
               </button>
          </>
     );
};
export default CountersList;
