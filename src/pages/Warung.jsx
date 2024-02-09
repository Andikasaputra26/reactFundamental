import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router-dom";

const Warung = () => {
  //   const foodMenu = useLoaderData();
  return (
    <div className="container">
      <>
        <Header />
        <Menu />
        <Footer />
      </>
    </div>
  );
};

export default Warung;
