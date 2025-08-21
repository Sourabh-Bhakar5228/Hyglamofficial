import { Outlet } from "react-router-dom";
import Nav from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">
      {/* Nav */}
      <Nav />

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
