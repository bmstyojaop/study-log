import React, { FC } from "react";

import { Cards } from "../components/Cards";

const icons = [
  "/assets/img/testicon1.jpg",
  "/assets/img/testicon2.jpg",
  "/assets/img/testicon3.jpg",
  "/assets/img/testicon4.jpg",
  "/assets/img/testicon5.jpg",
  "/assets/img/testicon6.jpg",
  "/assets/img/testicon7.jpg",
  "/assets/img/testicon8.jpg",
  "/assets/img/testicon9.jpg",
  "/assets/img/testicon10.jpg",
  "/assets/img/testicon1.jpg",
  "/assets/img/testicon2.jpg",
  "/assets/img/testicon3.jpg",
  "/assets/img/testicon4.jpg",
  "/assets/img/testicon5.jpg",
  "/assets/img/testicon6.jpg",
  "/assets/img/testicon7.jpg",
  "/assets/img/testicon8.jpg",
  "/assets/img/testicon9.jpg",
  "/assets/img/testicon10.jpg",
  "/assets/img/testicon1.jpg",
  "/assets/img/testicon2.jpg",
  "/assets/img/testicon3.jpg",
  "/assets/img/testicon4.jpg",
  "/assets/img/testicon5.jpg",
  "/assets/img/testicon6.jpg",
  "/assets/img/testicon7.jpg",
  "/assets/img/testicon8.jpg",
  "/assets/img/testicon9.jpg",
  "/assets/img/testicon10.jpg",
];

const Home: FC = () => {
  return (
    <div className=" w-screen h-screen flex justify-center">
      <div className="container flex flex-col items-center pt-4 md:flex-row md:flex-wrap md:items-start md:justify-around md:px-4">
        <Cards iconUrl={icons} />
      </div>
    </div>
  );
};

export default Home;
