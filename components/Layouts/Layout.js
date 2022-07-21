
import Navbar from "../Navbar/Navbar";
import ScrollToTop from "../Tools/ScrollToTop";
import Head from "next/head"
import {ToastContainer} from "react-toastify"
export default function Layout({ children ,title}) {
  return (
    <div className="content ">
      {/* <Head>
        <title>{title?`${title}-Home`:"Home"}</title>
      </Head> */}
      <ToastContainer position="bottom-center" limit={1}/>
      <Navbar/>
      
      {children}
      <ScrollToTop/>
      {/* <Footer/> */}
    </div>
  );
}


