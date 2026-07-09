import { Outlet } from "react-router-dom";
import FloatingWhatsAppButton from "../components/common/FloatingWhatsAppButton";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <main id="main-content" className="main-content" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}

export default MainLayout;
