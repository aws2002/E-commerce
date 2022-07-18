import Layout from "../components/Layouts/Layout";
import Head from "next/head";
import FeaturedCategories from "../components/SectionPage/FeaturedCategories";
import RecentlyViewed from "../components/SectionPage/RecentlyViewed";
import HeroSections from "../components/SectionPage/HeroSections";
import FeaturedProducts from "../components/SectionPage/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="keywords" content="osama" />
      </Head>
    <HeroSections/>
    <FeaturedCategories/>
    <FeaturedProducts/>
    <RecentlyViewed titel={"TOP RATE PRODUCTS"}/>
    <br />
    <br />
    </>
  );
}
Home.Layout = Layout;
