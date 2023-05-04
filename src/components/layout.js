import Navbar from "./nav";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
      <div className="">
        <Navbar />
        <div className="">
          {children}
        </div>
        <Footer />
      </div>
    )
  }