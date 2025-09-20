import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Header from "../core/common/header/header";
import BackToTop from "../core/common/backtotop/backToTop";
import Footer from "../core/common/footer/footer";

const Feature = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Determine className based on pathname
  const getHomeClass = (pathname: any) => {
    switch (pathname) {
      case "/index-3":
        return "home-3";
      case "/index-4":
        return "home-4";
      case "/index-5":
        return "home-five";
      case "/index-6":
        return "home-six";
      default:
        return "home-4";
    }
  };

  const homeClass = getHomeClass(location.pathname);

  return (
    <>
      <div className="main-wrapper">
        <div className={homeClass}>
          <Header />
          <Outlet />

          {/* Only show Footer if not on specific index routes */}
          {["/index", "/index-3", "/index-4", "/index-5", "/index-6"].includes(
            location.pathname
          ) ? null : (
            <Footer />
          )}

          <BackToTop />
        </div>

        <div className="sidebar-overlay"></div>
      </div>
    </>
  );
};

export default Feature;
