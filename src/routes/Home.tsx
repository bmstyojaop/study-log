import { collection, getDocs } from "firebase/firestore";
import React, { FC, useEffect, useState } from "react";

import { Card } from "../components/Card";
import { db } from "../firebase";

type StudyLog = {
  id: string;
  title: string;
  author: {
    id: string;
    username: string;
  };
  detail: string;
  hour: string;
  minute: string;
};
const Home: FC = () => {
  const [studyLog, setStudyLog] = useState<StudyLog[]>([]);
  useEffect(() => {
    // async関数を使用する時はuseEffectに渡す関数内でさらに関数を宣言する必要がある。
    const getStudyLogs = async () => {
      const data = await getDocs(collection(db, "studylog"));
      setStudyLog(
        data.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          author: {
            id: doc.data().author.id,
            username: doc.data().author.username,
          },
          detail: doc.data().detail,
          hour: doc.data().hour,
          minute: doc.data().minute,
        }))
      );
    };
    getStudyLogs();
  }, []);
  console.log(studyLog);

  return (
    <div className=" w-screen  hidden-scrollbar overflow-hidden flex justify-center">
      <div className="h-full hidden-scrollbar overflow-scroll container flex flex-col items-center pt-4 md:flex-row md:flex-wrap md:items-start md:justify-around md:px-4">
        <div className="container flex flex-col items-center pt-4 md:flex-row md:flex-wrap md:items-start md:justify-around md:px-4">
          {studyLog.map((card) => (
            <Card
              key={card.id}
              iconPath="/assets/img/testicon1.jpg"
              title={card.title}
              detail={card.detail}
              hour={card.hour}
              minute={card.minute}
              username={card.author.username}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
