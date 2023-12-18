import Footer from "./footer";
import Meta from "./meta";
import { MobileNavBar } from "./mobileNavBar";
import { Navbar } from "./navbar";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Navbar />
        <main>{children}</main>
        <MobileNavBar />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
