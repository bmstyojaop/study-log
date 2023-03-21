import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { FC, useEffect, useState } from "react";

import { Card } from "../components/Card";
import { db } from "../firebase";
import { StudyLog } from "../types/types";

const Home: FC = () => {
  const [studyLog, setStudyLog] = useState<StudyLog[]>([]);

  useEffect(() => {
    console.log("useEffect");
    // async関数を使用する時はuseEffectに渡す関数内でさらに関数を宣言する必要がある。
    const getStudyLogs = async () => {
      const studylogRef = collection(db, "studylog");
      const data = await getDocs(query(studylogRef, orderBy("createdAt", "desc")));
      setStudyLog(
        data.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          author: {
            id: doc.data().author.id,
            username: doc.data().author.username,
          },
          createdAt: doc.data().timestamp,
          detail: doc.data().detail,
          hour: doc.data().hour,
          minute: doc.data().minute,
        }))
      );
    };
    getStudyLogs();
    // 依存関係にstudyLogを加えると無限ループになってしまうので注意！
  }, []);

  return (
    <div className=" w-screen  hidden-scrollbar overflow-hidden flex justify-center">
      <div className="h-full hidden-scrollbar overflow-scroll container flex flex-col items-center pt-4 md:flex-row md:flex-wrap md:items-start md:justify-around md:px-4">
        <div className="container flex flex-col items-center pt-4 md:flex-row md:flex-wrap md:items-start md:justify-around md:px-4">
          {studyLog.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              iconPath="/assets/img/testicon1.jpg"
              title={card.title}
              detail={card.detail}
              hour={card.hour}
              minute={card.minute}
              username={card.author.username}
              studyLog={studyLog}
              setStudyLog={setStudyLog}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
