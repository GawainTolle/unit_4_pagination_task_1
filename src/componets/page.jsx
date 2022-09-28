import NavBar from "./navBar";
import { useState } from "react";
import Breadcrumb from "./breadcrumb";

const Page = () => {
     const [jazzList, setJazzList] = useState([
          { id: 0, name: "jazzList", active: true },
          { id: 1, name: "alfaMist", active: false },
          { id: 2, name: "poppyAjudha", active: false },
          { id: 3, name: "ezraCollective", active: false },
          { id: 4, name: "daveBrubeck", active: false },
     ]);

     const handleJazzClick = (id) => {
          const newJazzList = jazzList.map((list) => ({ ...list, active: list.id === id }));
          setJazzList(newJazzList);
     };

     const handleBreadcrumbSetActive = () => {
          const newJazzList = jazzList.map((list) => ({ ...list, active: list.id === 0 }));
          setJazzList(newJazzList);
     };
     const currentActivePage = jazzList.find((list) => list.active);

     const logoUrl = "https://lastfm.freetls.fastly.net/i/u/ar0/a83a12f7d4cb470ca0741fb747e7d57f.jpg";
     const siteName = "daveBrubeck";
     return (
          <main className="d-flex flex-nowrap" style={{ height: "100vh" }}>
               <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: "280px" }}>
                    <div className="d-flex aling-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                         <img src={logoUrl} alt="theBestJazz" className="bi pe-none me-2" style={{ height: "8vh" }} />
                         <span className="fs-4">{siteName}</span>
                    </div>
                    <hr />

                    <NavBar jazzList={jazzList} handleClick={handleJazzClick} />
               </div>
               <div>
                    <div>
                         <Breadcrumb activeList={currentActivePage} handleBreadcrumb={handleBreadcrumbSetActive} />
                    </div>
                    <h1 className="h3">Info</h1>
               </div>
          </main>
     );
};
export default Page;
