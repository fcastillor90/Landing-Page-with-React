import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CardProduct from "./Components/CardProduct/Card";
import Jumbotron from "./Components/Jumbotron";

const Home = () => {
  return (
    <>
    <div>
      <Navbar logo={"Start Bootstrap"} cart={cart}/>
    </div>
      <div>
        <Jumbotron />
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <CardProduct />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Home;