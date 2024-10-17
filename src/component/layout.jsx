import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/navbar";
import { Topbar } from "./topbar";

export function Layout() {
  return (
    <>
      <body>
        <Topbar />
        <div style={{display:"flex"}}>
        <Navbar />
        <main>
          <Outlet/>
        </main>
        </div>
      </body>
    </>
  );
}
