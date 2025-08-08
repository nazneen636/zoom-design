import React from "react";
import Banner from "../../components/homeComponent/Banner";
import Add from "../../components/homeComponent/Add";
import ProductCard from "../../components/common/ProductCard";
import Popular from "../../components/homeComponent/Popular";

const Home = () => {
  return (
    <div>
      <Banner />
      <Add />
      <Popular />
    </div>
  );
};

export default Home;
