const Counter = (props) => {
     const { value } = props;
     const formatValue = () => {
          return value === 0 ? "empty" : value;
     };
     const desingValue = () => {
          let desing = "badge m-2 ";
          return (desing += value === 0 ? "bg-secondary" : "bg-primary");
     };
     const desingButton = () => {
          let desing = "btn btn-dark btn-sm m-2";
          return desing;
     };
     // const handleIncrement = () => {
     //      return props.value + 1;
     // };
     // const handleDecrement = () => {
     //      return props.value - 1;
     // };

     return (
          <div>
               <span>{props.name}</span>
               <span className={desingValue()}>{formatValue()}</span>
               <button className={desingButton()} onClick={() => props.onI(props.id)}>
                    +
               </button>
               <button className={desingButton()} onClick={() => props.onD(props.id)}>
                    -
               </button>
               <button className={desingButton()} onClick={() => props.onDelete(props.id)}>
                    Delete
               </button>
          </div>
     );
};
export default Counter;
