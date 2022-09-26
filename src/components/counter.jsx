// import React from "react";

const Counter = (props) => {
     const { value } = props;

     const formatValue = () => {
          return value === 0 ? "empty" : value;
     };
     const desingValue = () => {
          let desing = "badge m-2 ";
          return (desing += value === 0 ? "bg-secondary" : "bg-primary");
     };

     return (
          <div>
               <span>{props.name}</span>
               <span className={desingValue()}>{formatValue()}</span>
               <button className="btn btn-dark btn-sm m-2" onClick={() => props.onIncrement(props.id)}>
                    +
               </button>
               <button className="btn btn-dark btn-sm m-2" onClick={() => props.onDecrement(props.id)}>
                    -
               </button>
               <button className="btn btn-dark btn-sm m-2" onClick={() => props.onDelete(props.id)}>
                    Delete
               </button>
          </div>
     );
};
export default Counter;
