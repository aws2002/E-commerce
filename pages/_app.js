// import Layout from "../components/Layouts/Layout";
import "../styles/main.scss";
import "../components/Skeleton/skeleton.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.css";
import { StoreProvider } from "../contexts/Store";
import { SessionProvider } from "next-auth/react";
import 'react-toastify/dist/ReactToastify.css';
export default function MyApp({ Component, pageProps:{session,...pageProps} }) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <div className=" dark:bg-color_19">
      <SessionProvider session={session}>
        <StoreProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StoreProvider>
      </SessionProvider>
    </div>
  );
}
const EmptyLayout = ({ children }) => <>{children}</>;
