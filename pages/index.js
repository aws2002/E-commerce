import Layout from "../components/Layouts/Layout";
import Head from "next/head";
import FeaturedCategories from "../components/SectionPage/FeaturedCategories";
import ProductScreen from "../components/SectionPage/ProductScreen";
import HeroSections from "../components/SectionPage/HeroSections";
import FeaturedProducts from "../components/SectionPage/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="keywords" content="osama" />
      </Head>
      <HeroSections />
      <FeaturedCategories />
      <FeaturedProducts />
      <ProductScreen titel={"TOP RATE PRODUCTS"} />
      <br />
      <br />
    </>
  );
}
Home.Layout = Layout;
