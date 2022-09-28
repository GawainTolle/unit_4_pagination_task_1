import NavLink from "./navLink";

const NavBar = ({ jazzList, handleClick }) => {
     return (
          <div>
               <ul className="nav nav-pills flex-column mb-auto">
                    {jazzList.map((list) => (
                         <NavLink key={list.id} {...list} handleClick={handleClick} />
                    ))}
               </ul>
          </div>
     );
};
export default NavBar;
