import { collection, getDocs } from "firebase/firestore";
import React, { FC, useEffect } from "react";

import { Cards } from "../components/Cards";
import { db } from "../firebase";

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
];

const Home: FC = () => {
  // マウント時に1度だけ表示したいのでuseEffect
  useEffect(() => {
    // async関数を使用する時はuseEffectに渡す関数内でさらに関数を宣言する必要がある。
    const getStudyLogs = async () => {
      const data = await getDocs(collection(db, "studylog"));
    };
    getStudyLogs();
  }, []);

  return (
    <div className=" w-screen  hidden-scrollbar overflow-hidden flex justify-center">
      <div className="h-full hidden-scrollbar overflow-scroll container flex flex-col items-center pt-4 md:flex-row md:flex-wrap md:items-start md:justify-around md:px-4">
        <Cards iconUrl={icons} />
      </div>
    </div>
  );
};

export default Home;
