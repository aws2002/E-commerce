
import Navbar from "../Navbar/Navbar";
import ScrollToTop from "../Tools/ScrollToTop";
import Head from "next/head"
export default function Layout({ children ,title}) {
  return (
    <div className="content ">
      {/* <Head>
        <title>{title?`${title}-Home`:"Home"}</title>
      </Head> */}
      <Navbar/>
      {children}
      <ScrollToTop/>
      {/* <Footer/> */}
    </div>
  );
}


