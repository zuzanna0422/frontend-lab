import NavBarMenuApp from "../components/NavBarMenuApp";
import FooterApp from "../components/FooterApp";

function RootLayout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBarMenuApp />

      <main className="container py-4 flex-fill">
        {children}
      </main>

      <FooterApp />
    </div>
  );
}

export default RootLayout;
