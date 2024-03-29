import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import React, { FC, useEffect, useState } from "react";

import { Card } from "../components/Card";
import { db } from "../firebase";
import { StudyLog } from "../types/types";

const Home: FC = () => {
  const [studyLog, setStudyLog] = useState<StudyLog[]>([]);

  useEffect(() => {
    // async関数を使用する時はuseEffectに渡す関数内でさらに関数を宣言する必要がある。
    const getStudyLogs = async () => {
      const studylogRef = collection(db, "studylog");
      // TODO: limitを指定する
      // TODO: paginationを実装する
      const data = await getDocs(query(studylogRef, orderBy("createdAt", "desc"), limit(100)));
      setStudyLog(
        data.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          author: {
            id: doc.data().author.id,
            photoUrl: doc.data().author.photoUrl,
            username: doc.data().author.username,
          },
          createdAt: doc.data().timestamp,
          detail: doc.data().detail,
          hour: doc.data().hour,
          minute: doc.data().minute,
          time: doc.data().time,
        }))
      );
    };
    getStudyLogs();
    // 依存関係にstudyLogを加えると無限ループになってしまうので注意！
  }, []);

  return (
    <div className=" hidden-scrollbar  flex w-screen justify-center overflow-hidden">
      <div className="hidden-scrollbar container flex h-full flex-col items-center overflow-scroll pt-4 md:flex-row md:flex-wrap md:items-start md:justify-around md:px-4">
        <div className="container flex flex-col items-center pt-4 md:flex-row md:flex-wrap md:items-start md:justify-around md:px-4">
          {studyLog.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              iconPath={card.author.photoUrl}
              title={card.title}
              detail={card.detail}
              hour={card.hour}
              minute={card.minute}
              username={card.author.username}
              studyLog={studyLog}
              setStudyLog={setStudyLog}
              uid={card.author.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
