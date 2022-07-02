import Head from "next/head";
import Search from "../components/Search";
import Gallery from "../components/Gallery";
import QuickSearch from "../components/QuickSearch";
const Home = () => {

  return (
    <div className="">
      <Head>
        <title>Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" lg:space-y-10 mt-10 no-scrollbar">
        <h1 className="font-serif text-3xl lg:text-4xl font-semibold mb-10 tracking-wider text-center ">
          Image Gallery
        </h1>
        <Search />
        <QuickSearch />
       
          <Gallery />
   
      </main>
    </div>
  );
};

export default Home;
