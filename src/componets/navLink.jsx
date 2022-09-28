const NavLink = (props) => {
     const handleClick = () => {
          props.handleClick(props.id);
     };
     const desing = () => {
          let desing = "nav-link";
          return (desing += props.active ? " active" : "");
     };

     return (
          <li className={desing()} onClick={handleClick}>
               {props.name}
          </li>
     );
};
export default NavLink;
