import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="hh-app">
      <Navbar />
      <main className="hh-main">{children}</main>
      <footer className="hh-footer">
        <div className="hh-footer__inner">© {new Date().getFullYear()} HouseHunt</div>
      </footer>
    </div>
  );
}

export default Layout;

