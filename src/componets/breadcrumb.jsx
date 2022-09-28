const Breadcrumb = (props) => {
     const isMainPage = props.activeList.id === 0;
     const mainClasses = "breadcrumb-item" + (isMainPage ? " active" : "");

     return (
          <nav>
               <ol className="breadcrumb">
                    <li className={mainClasses} onClick={props.handleBreadcrumb}>
                         Main List
                    </li>
                    {!isMainPage && <li className="breadcrumb-item active">{props.activeList.name}</li>}
               </ol>
          </nav>
     );
};
export default Breadcrumb;
