import NavBarMenuApp from "../components/NavBarMenuApp";
import FooterApp from "../components/FooterApp";
import { Outlet} from 'react-router-dom'; 

function RootLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBarMenuApp />

      <main className="container py-4 flex-fill">
        <Outlet />
      </main>

      <FooterApp />
    </div>
  );
}

export default RootLayout;
